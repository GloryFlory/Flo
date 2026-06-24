import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  const { project_id, label, due_date } = await request.json();

  if (!project_id || !label?.trim()) {
    return NextResponse.json({ error: 'project_id and label required' }, { status: 400 });
  }

  const supabase = createServerClient();

  // Get current max sort_order for this project
  const { data: existing } = await supabase
    .from('flos_milestones')
    .select('sort_order')
    .eq('project_id', project_id)
    .order('sort_order', { ascending: false })
    .limit(1);

  const sort_order = (existing?.[0]?.sort_order ?? 0) + 1;

  const { data, error } = await supabase
    .from('flos_milestones')
    .insert({ project_id, label: label.trim(), due_date: due_date || null, sort_order })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
