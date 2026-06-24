-- FLOs — Flo's OS
-- Run this in Supabase SQL Editor → New query

-- ── Projects ────────────────────────────────────────────────────────────────
-- One row per life area. Plans, goals, and context live here.
-- Claude reads these to generate daily focus priorities.

create table if not exists flos_projects (
  id            text primary key,              -- e.g. 'gwtf', 'mac', 'flowgrid'
  name          text not null,
  category      text not null,                 -- 'business' | 'creative' | 'personal' | 'future'
  status        text not null default 'active',-- 'active' | 'planning' | 'attention' | 'ongoing' | 'future'
  status_label  text not null,
  accent_color  text not null,
  icon          text not null,                 -- lucide icon name, e.g. 'Mic'
  tags          text[] not null default '{}',
  goal          text,
  phase         text,
  description   text,
  notes         text,
  team          text[] default '{}',
  sort_order    int not null default 0,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- ── Tasks ───────────────────────────────────────────────────────────────────
-- All tasks across all projects. quick_action = shows on dashboard card.

create table if not exists flos_tasks (
  id           uuid primary key default gen_random_uuid(),
  project_id   text not null references flos_projects(id) on delete cascade,
  text         text not null,
  priority     text not null default 'medium',  -- 'high' | 'medium' | 'low'
  status       text not null default 'todo',    -- 'todo' | 'done'
  quick_action boolean not null default false,  -- appears on dashboard card
  sort_order   int not null default 0,
  done_at      timestamptz,
  created_at   timestamptz not null default now()
);

-- ── Milestones ──────────────────────────────────────────────────────────────
-- Key dates and goals per project. Shown on project pages.

create table if not exists flos_milestones (
  id          uuid primary key default gen_random_uuid(),
  project_id  text not null references flos_projects(id) on delete cascade,
  label       text not null,
  due_date    date,
  done        boolean not null default false,
  done_at     timestamptz,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now()
);

-- ── Links ───────────────────────────────────────────────────────────────────
-- External and internal links per project.

create table if not exists flos_links (
  id          uuid primary key default gen_random_uuid(),
  project_id  text not null references flos_projects(id) on delete cascade,
  label       text not null,
  url         text not null,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now()
);

-- ── Captures ────────────────────────────────────────────────────────────────
-- The inbox. Free-text thoughts, updates, and ideas.
-- Claude reads recent captures when generating daily focus.

create table if not exists flos_captures (
  id          uuid primary key default gen_random_uuid(),
  text        text not null,
  project_id  text references flos_projects(id) on delete set null, -- null = unrouted
  routed      boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ── Auto-update updated_at ───────────────────────────────────────────────────

create or replace function flos_set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger flos_projects_updated_at
  before update on flos_projects
  for each row execute function flos_set_updated_at();

-- ── Seed: initial project data ───────────────────────────────────────────────

insert into flos_projects (id, name, category, status, status_label, accent_color, icon, tags, goal, phase, description, notes, team, sort_order) values

('gwtf', 'Grow with the Flo', 'creative', 'active', 'Active', '#0F6E56', 'Mic',
  array['Podcast', 'Social'],
  'Build a growing audience around authentic living — through the podcast, IG, and Facebook — with daily content that feels natural, not forced.',
  'Content engine — recording exists, distribution not yet systematic',
  'Interviews are live, high-dev footage is recorded. The next step is turning raw material into a repeatable content machine: podcast → clips → reels → posts.',
  'Content strategy: podcast = source material. Clip into reels (IG + Facebook use same). Pull quotes become text posts. BTS = story content. One session feeds all channels.',
  '{}', 1),

('mac', 'MAC', 'business', 'active', 'Active', '#534AB7', 'Ticket',
  array['Events', 'Tickets'],
  'Sell out the Pre and Main fest. Deliver sponsor commitments. Create content that builds the MAC brand year-round.',
  'Active — pre-fest promotion, sponsor deliverables outstanding',
  'MAC needs content for sponsor approval, pre-fest promo assets, and a clear ticket sales push.',
  null, '{}', 2),

('retreat', 'Connection Retreat', 'business', 'planning', 'Planning', '#993556', 'Users',
  array['Events', 'Workshops'],
  'Run a transformational retreat focused on authentic human connection. Workshops, movement, and space to go deeper.',
  'Planning — venue not locked, curriculum draft not started, website not built',
  'Co-organising with Maria. The retreat needs a venue, a workshop plan, a website, and a promotion strategy.',
  'Venue blocks everything. Do not invest time on website or promotion until location and dates are confirmed.',
  array['Maria'], 3),

('flowgrid', 'FlowGrid', 'business', 'attention', 'Needs attention', '#BA7517', 'Grid2x2',
  array['Product', 'SaaS'],
  'Convert passive sign-ups into active users. Understand why people aren''t activating. Grow word-of-mouth among retreat organisers.',
  'Growth — sign-ups coming in organically, activation rate low, no active outreach',
  'FlowGrid is being found without promotion, which is a strong signal. The problem is activation — people sign up but don''t use it.',
  'The organic sign-ups are a real asset. The activation problem is almost certainly onboarding friction, not product-market fit.',
  '{}', 4),

('health', 'Health journey', 'personal', 'ongoing', 'Ongoing', '#3B6D11', 'Heart',
  array['Wellbeing'],
  'Build a sustainable, enjoyable health routine — manage pain, move well, think clearly. Not perfection, consistency.',
  'Ongoing — no structured routine yet, working reactively',
  'Pain management, movement quality, mental clarity. The goal is a weekly rhythm that feels natural.',
  'The pattern: when health is good, everything else flows. Treat this as infrastructure, not a bonus.',
  '{}', 5),

('learn', 'Knowledge base', 'personal', 'ongoing', 'Ongoing', '#185FA5', 'BookOpen',
  array['Self-education'],
  'Build a personal learning system on the website. Currently focused on coding and AI. Grows into other life areas over time.',
  'Active — 2 modules built (runtimes, UI libraries), next modules planned',
  'The /learn section is a bespoke learning platform built for how you think. Modules have analogies, quizzes, and track progress.',
  null, '{}', 6),

('consulting', 'Retreat consulting', 'business', 'attention', 'Needs attention', '#993C1D', 'Briefcase',
  array['Services', 'B2B'],
  'Position as a retreat consultant — helping organisers build websites, integrate FlowGrid, and run better events.',
  'Positioning — info on website but no active promotion or clear job title',
  'The service exists, the page exists, but the positioning is unclear. Nobody knows what to call you yet.',
  'Suggested title: "Retreat Experience Designer" or "Retreat Tech & Operations Consultant". Pick one, commit, use it.',
  '{}', 7),

('vac', 'VAC 2027', 'future', 'future', '2027', '#5F5E5A', 'Plane',
  array['Events', 'Vietnam'],
  'Run the Vietnam Acro Convention 2027 — international teachers, great energy, excellent organisation.',
  'Pre-planning — concept only, no dates, teachers, or venue confirmed',
  'Early stage planning for VAC 2027. Lock dates, confirm Vietnam, begin teacher outreach early.',
  null, '{}', 8)

on conflict (id) do nothing;

-- ── Seed: tasks ──────────────────────────────────────────────────────────────

insert into flos_tasks (project_id, text, priority, quick_action, sort_order) values
-- gwtf
('gwtf', 'Clip latest recording → 3 reels', 'high', true, 1),
('gwtf', 'Set up Facebook page', 'high', true, 2),
('gwtf', 'Draft week 1 posting calendar', 'high', true, 3),
('gwtf', 'Write 5 evergreen quote posts', 'medium', false, 4),
('gwtf', 'Add captions to all existing reels', 'medium', false, 5),
('gwtf', 'Book next 2 interview guests', 'medium', false, 6),
('gwtf', 'Set up automated cross-posting IG → Facebook', 'low', false, 7),
-- mac
('mac', 'Send sponsor videos for approval', 'high', true, 1),
('mac', 'Brief editor on pre-fest video needs', 'high', true, 2),
('mac', 'Create pre-fest social content (5 posts)', 'high', true, 3),
('mac', 'Pull ticket sales report', 'medium', false, 4),
('mac', 'Plan main fest content schedule', 'medium', false, 5),
('mac', 'AI-generate promo copy variants', 'medium', false, 6),
-- retreat
('retreat', 'Call Maria — align on venue shortlist', 'high', true, 1),
('retreat', 'Contact top 3 venues for availability + pricing', 'high', true, 2),
('retreat', 'Draft workshop curriculum outline', 'high', true, 3),
('retreat', 'Define retreat pricing + package structure', 'medium', false, 4),
('retreat', 'Website first pass — basic landing page', 'medium', false, 5),
('retreat', 'Create early-bird interest list', 'medium', false, 6),
-- flowgrid
('flowgrid', 'Pull list of sign-ups who never activated', 'high', true, 1),
('flowgrid', 'Write personalised outreach email (free Pro offer)', 'high', true, 2),
('flowgrid', 'Send outreach to first 10 inactive users', 'high', true, 3),
('flowgrid', 'Set up activation tracking in Supabase', 'high', false, 4),
('flowgrid', 'Interview 3 users on why they didn''t activate', 'medium', false, 5),
('flowgrid', 'Review onboarding flow — identify friction points', 'medium', false, 6),
-- health
('health', 'Book physio / massage', 'high', true, 1),
('health', '3 padel sessions this week', 'high', true, 2),
('health', 'Start daily meditation — day 1', 'high', true, 3),
('health', 'Write out ideal weekly movement schedule', 'medium', false, 4),
('health', 'Research pain management exercises', 'medium', false, 5),
-- learn
('learn', 'Write Module 3: Frameworks (Next.js, Nuxt, Remix)', 'high', true, 1),
('learn', 'Write Module 4: Databases', 'medium', true, 2),
('learn', 'Add practical coding exercises to Module 1', 'medium', false, 3),
('learn', 'Plan non-coding module topics (AI, business, health)', 'low', false, 4),
-- consulting
('consulting', 'Update job title on website, LinkedIn, Instagram bio', 'high', true, 1),
('consulting', 'Write a 1-line "what I do" — rehearse it out loud', 'high', true, 2),
('consulting', 'Identify 3 retreat organisations to reach out to', 'high', true, 3),
('consulting', 'Write outreach message + value proposition', 'medium', false, 4),
('consulting', 'Create a simple consulting deck or one-pager', 'medium', false, 5),
-- vac
('vac', 'Confirm dates and Vietnam location', 'high', true, 1),
('vac', 'Draft shortlist of 10 teachers to invite', 'high', true, 2),
('vac', 'Create master planning document', 'medium', false, 3),
('vac', 'Research venue options in Vietnam', 'medium', false, 4);

-- ── Seed: links ──────────────────────────────────────────────────────────────

insert into flos_links (project_id, label, url, sort_order) values
('gwtf', 'Episode briefs', '/behind-the-episode', 1),
('gwtf', 'Instagram', 'https://instagram.com', 2),
('learn', 'Live /learn page', '/learn', 1),
('retreat', 'Retreat page', '/retreat', 1),
('consulting', 'Services page', '/work', 1),
('flowgrid', 'FlowGrid app', 'https://flowgrid.app', 1);
