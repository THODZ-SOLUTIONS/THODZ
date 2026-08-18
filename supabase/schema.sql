-- Run once in the Supabase SQL editor (Dashboard → SQL Editor → New query).
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  type text,
  timeline text,
  details text,
  nda boolean not null default false,
  status text not null default 'new' check (status in ('new', 'read'))
);

alter table public.contact_submissions enable row level security;

-- The dashboard (any authenticated user) may read, triage, and delete.
-- No insert policy: inserts come only from the API route via the secret
-- key, which bypasses RLS entirely.
create policy "authenticated select" on public.contact_submissions
  for select to authenticated using (true);
create policy "authenticated update" on public.contact_submissions
  for update to authenticated using (true) with check (true);
create policy "authenticated delete" on public.contact_submissions
  for delete to authenticated using (true);
