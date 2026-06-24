import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  if (!text?.trim()) {
    return NextResponse.json({ error: 'No text provided' }, { status: 400 });
  }

  const supabase = createServerClient();
  const { error } = await supabase.from('flos_captures').insert({ text: text.trim() });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
