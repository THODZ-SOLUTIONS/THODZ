import { createBrowserClient } from '@supabase/ssr';

// Browser-side Supabase client. Publishable key only — safe to expose;
// all data access is gated by RLS + the signed-in session.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );
}
