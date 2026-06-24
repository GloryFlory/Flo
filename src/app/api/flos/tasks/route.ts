import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  const { project_id, text, priority } = await request.json();

  if (!project_id || !text?.trim()) {
    return NextResponse.json({ error: 'project_id and text required' }, { status: 400 });
  }

  const validPriorities = ['high', 'medium', 'low'];
  const safePriority = validPriorities.includes(priority) ? priority : 'medium';

  const supabase = createServerClient();

  // Get current max sort_order for this project
  const { data: existing } = await supabase
    .from('flos_tasks')
    .select('sort_order')
    .eq('project_id', project_id)
    .order('sort_order', { ascending: false })
    .limit(1);

  const sort_order = (existing?.[0]?.sort_order ?? 0) + 1;

  const { data, error } = await supabase
    .from('flos_tasks')
    .insert({
      project_id,
      text: text.trim(),
      priority: safePriority,
      status: 'todo',
      quick_action: false,
      sort_order,
    })
    .select('id, text, priority, status')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
