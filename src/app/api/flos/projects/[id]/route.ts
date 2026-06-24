import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const supabase = createServerClient();

  const [
    { data: project, error: pe },
    { data: tasks,   error: te },
    { data: milestones },
    { data: links },
  ] = await Promise.all([
    supabase.from('flos_projects').select('*').eq('id', id).single(),
    supabase.from('flos_tasks').select('*').eq('project_id', id).order('sort_order'),
    supabase.from('flos_milestones').select('*').eq('project_id', id).order('sort_order'),
    supabase.from('flos_links').select('*').eq('project_id', id).order('sort_order'),
  ]);

  if (pe || !project) {
    return NextResponse.json({ error: te?.message ?? 'Project not found' }, { status: 404 });
  }

  return NextResponse.json({ project, tasks: tasks ?? [], milestones: milestones ?? [], links: links ?? [] });
}
