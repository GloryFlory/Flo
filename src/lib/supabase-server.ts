import { createClient } from '@supabase/supabase-js';

// Server-side only — uses the service role key which bypasses RLS.
// Never import this in client components or anything with 'use client'.
export function createServerClient() {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key  = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}
