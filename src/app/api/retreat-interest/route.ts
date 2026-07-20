import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../lib/supabase-server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const { email, name } = await request.json();

  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanName = typeof name === 'string' && name.trim() ? name.trim() : null;

  const supabase = createServerClient();

  const { data: existing } = await supabase
    .from('retreat_interest')
    .select('id')
    .eq('email', cleanEmail)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ status: 'already_on_list' });
  }

  const { error } = await supabase
    .from('retreat_interest')
    .insert({ email: cleanEmail, name: cleanName });

  if (error) {
    // Unique violation from a race between the check above and this insert —
    // someone else's request landed first, which is the same happy outcome.
    if (error.code === '23505') {
      return NextResponse.json({ status: 'already_on_list' });
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ status: 'added' });
}
