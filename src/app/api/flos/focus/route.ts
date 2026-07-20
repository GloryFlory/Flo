import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createServerClient } from '@/lib/supabase-server';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST() {
  const supabase = createServerClient();

  // Fetch all projects + their open tasks
  const [{ data: projects }, { data: tasks }] = await Promise.all([
    supabase
      .from('flos_projects')
      .select('id, name, status, status_label, goal, phase, notes')
      .neq('status', 'future')
      .order('sort_order'),
    supabase
      .from('flos_tasks')
      .select('id, project_id, text, priority, status')
      .eq('status', 'todo')
      .order('sort_order'),
  ]);

  if (!projects?.length) {
    return NextResponse.json({ error: 'No project data' }, { status: 500 });
  }

  // Build a compact context string for Claude
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  const projectSummaries = projects.map(p => {
    const projectTasks = (tasks ?? [])
      .filter(t => t.project_id === p.id)
      .map(t => `    [id: ${t.id}] [${t.priority}] ${t.text}`)
      .join('\n');
    return `## ${p.name} (${p.status_label})
Goal: ${p.goal ?? 'Not set'}
Phase: ${p.phase ?? 'Not set'}
${p.notes ? `Note: ${p.notes}` : ''}
Open tasks:
${projectTasks || '    (no open tasks)'}`;
  }).join('\n\n');

  const prompt = `Today is ${today}. You are the AI layer inside FLOs — Flo's personal OS for his life and projects.

Here is the current state of all active projects and their open tasks:

${projectSummaries}

Your job: pick exactly 3 tasks Flo should focus on TODAY. Prioritise based on:
1. Blocking dependencies — tasks that unlock other work
2. High leverage — small effort, big impact
3. Time sensitivity — things that are overdue or have near-term deadlines
4. Project health — "Needs attention" projects take priority over smooth ones

Respond in this exact JSON format (no markdown, no explanation, just the JSON):
[
  {
    "taskId": "the id from [id: ...] for this task, copied exactly",
    "taskText": "exact task text from the list above",
    "project": "project name",
    "reasoning": "one sentence — why this today, specifically"
  },
  ...
]`;

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 600,
    messages: [{ role: 'user', content: prompt }],
  });

  const raw = message.content[0].type === 'text' ? message.content[0].text.trim() : '[]';

  let focusItems: { taskId?: string; taskText: string; project: string; reasoning: string }[];
  try {
    // Strip markdown code fences if present
    const clean = raw.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    focusItems = JSON.parse(clean);
  } catch {
    return NextResponse.json({ error: 'Failed to parse AI response', raw }, { status: 500 });
  }

  // Match back to real task IDs — prefer the id Claude echoed back, fall back to exact text match
  const idSet   = new Set((tasks ?? []).map(t => t.id));
  const textMap = new Map((tasks ?? []).map(t => [t.text, t.id]));
  const result = focusItems.map((item, i) => ({
    id: (item.taskId && idSet.has(item.taskId)) ? item.taskId : textMap.get(item.taskText) ?? `ai-${i}`,
    text: item.taskText,
    project: item.project,
    reasoning: item.reasoning,
  }));

  return NextResponse.json(result);
}
