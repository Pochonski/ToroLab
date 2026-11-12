create table public.saved_cases (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  schema_version smallint not null default 1 check (schema_version = 1),
  answers jsonb not null check (jsonb_typeof(answers) = 'object'),
  results jsonb not null check (jsonb_typeof(results) = 'array')
);

create index saved_cases_owner_date on public.saved_cases (user_id, created_at desc);

alter table public.saved_cases enable row level security;
revoke all on public.saved_cases from anon, authenticated;
grant select, insert on public.saved_cases to authenticated;

create policy "Read own cases" on public.saved_cases
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Save own cases" on public.saved_cases
  for insert to authenticated with check ((select auth.uid()) = user_id);
