import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

// Trivial read so Supabase sees activity and doesn't pause the free-tier DB
// after 7 days of inactivity. Hit by a scheduled GitHub Action.
export async function GET() {
  const supabase = createServerClient();
  const { error } = await supabase.from('flos_projects').select('id').limit(1);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
}
