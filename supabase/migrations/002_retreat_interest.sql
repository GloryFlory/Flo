create table retreat_interest (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  name text,
  created_at timestamp with time zone default now()
);

alter table retreat_interest enable row level security;

-- Anonymous visitors may register interest, but never read the list back.
create policy "Anyone can insert retreat interest"
  on retreat_interest
  for insert
  to anon
  with check (true);
