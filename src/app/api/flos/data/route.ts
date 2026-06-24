import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export async function GET() {
  const supabase = createServerClient();

  const [{ data: projects, error: pe }, { data: tasks, error: te }] = await Promise.all([
    supabase.from('flos_projects').select('*').order('sort_order'),
    supabase.from('flos_tasks').select('*').eq('quick_action', true).order('sort_order'),
  ]);

  if (pe || te) {
    return NextResponse.json({ error: pe?.message ?? te?.message }, { status: 500 });
  }

  return NextResponse.json({ projects, tasks });
}
