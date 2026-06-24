create table learn_progress (
  id uuid default gen_random_uuid() primary key,
  concept_key text not null unique,
  read_at timestamp with time zone default now()
);
