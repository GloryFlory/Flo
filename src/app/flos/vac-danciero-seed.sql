-- ══════════════════════════════════════════════════════════════════════
-- FLOs seed: Danciero project + VAC 2027 full task list
-- Run in Supabase SQL Editor
-- ══════════════════════════════════════════════════════════════════════


-- ── 1. Add Danciero ────────────────────────────────────────────────────

insert into flos_projects (
  id, name, category, status, status_label, accent_color, icon,
  tags, goal, phase, description, notes, team, sort_order
) values (
  'danciero',
  'Danciero',
  'future',
  'future',
  'Parked',
  '#8B5CF6',
  'Users',
  array['Platform', 'Dance', 'Travel'],
  'Build a platform that connects dancers around the world across multiple dance styles — a single hub for events, socials, and studios so travelling dancers never have to dig through expired Facebook groups again.',
  'Parked — concept validated personally, no active development',
  'As a travelling dancer, finding local events means trawling expired Facebook groups and hunting for someone with a WhatsApp link. Danciero bridges this: one place for studios, events, and communities across all dance styles.',
  'Validate before building. Key questions: would studios list for free? Would dancers pay for premium? What is the one pain point to solve first — events discovery or studio directory?',
  '{}',
  9
) on conflict (id) do nothing;


insert into flos_tasks (project_id, text, priority, quick_action, sort_order) values
  ('danciero', 'Map 3–5 competitors: DancePlug, Salsa.direct, Eventbrite dance, local apps', 'high', true,  1),
  ('danciero', 'Write 1-page problem statement — the travelling dancer pain point', 'high', true,  2),
  ('danciero', 'Interview 5 dance studios: how do you currently attract travelling dancers?', 'medium', false, 3),
  ('danciero', 'Define MVP scope: events-only first, or studios + events from day 1?', 'medium', false, 4),
  ('danciero', 'Validate: would 10 studios list themselves for free?', 'medium', false, 5),
  ('danciero', 'Identify which dance styles to support at launch (salsa, acro, bachata, etc.)', 'low', false, 6);


-- ── 2. VAC 2027 — full task list (MAC master checklist adapted) ────────
--
-- The MAC checklist had ~40 tasks across 5 categories.
-- These are adapted for VAC 2027 context. All start as 'todo'.
-- Statuses can be updated in FLOs as you make progress.


-- First: update the VAC project description to reflect current reality
update flos_projects
set
  phase       = 'Pre-planning — Vietnam confirmed as destination, dates and venue TBD',
  description = 'Planning the Vietnam Acro Convention 2027. Early stage — concept is clear, execution has not started. Key decisions: exact location in Vietnam, dates, and first teacher confirmations.',
  notes       = 'Lead time is everything with international events. Teachers book up 12–18 months out. Venue and dates unlock everything else. Start teacher outreach before the venue is confirmed — gauge interest first.'
where id = 'vac';


-- Clear old placeholder tasks for VAC and replace with full list
delete from flos_tasks where project_id = 'vac';

insert into flos_tasks (project_id, text, priority, quick_action, sort_order) values

  -- ── FOUNDATIONS (lock these first) ──────────────────────────────────
  ('vac', 'Confirm exact location in Vietnam (Hanoi / Hội An / Da Nang / HCMC)', 'high', true,  1),
  ('vac', 'Lock dates for VAC 2027 — avoid clashes with other acro events',       'high', true,  2),
  ('vac', 'Shortlist 3 venues — capacity, AC, outdoor space, accommodation on-site','high', true,  3),
  ('vac', 'Draft teacher wishlist (15 names) — international + local Vietnamese',   'high', true,  4),
  ('vac', 'Contact top 5 teachers and gauge interest / availability',               'high', false, 5),
  ('vac', 'Define ticket price range and capacity (how many attendees?)',            'high', false, 6),

  -- ── LEGAL & SAFETY ───────────────────────────────────────────────────
  ('vac', 'Research insurance requirements for international event in Vietnam',     'high', false, 7),
  ('vac', 'Draft liability waiver / sign-up form legal language',                   'medium', false, 8),
  ('vac', 'Create contingency plans: medical, missing teacher, venue, weather',     'medium', false, 9),
  ('vac', 'Write Code of Conduct — safe practices, consent, community guidelines',  'medium', false, 10),

  -- ── PROGRAMME ────────────────────────────────────────────────────────
  ('vac', 'Define programme format: # of parallel workshops, evening events',       'medium', false, 11),
  ('vac', 'Confirm teacher workshop topics and curriculum',                          'medium', false, 12),
  ('vac', 'Organise pre-event teacher meetup — align on logistics and safe practices','medium', false, 13),
  ('vac', 'Plan special events: jam, ecstatic dance, sound healing, cacao ceremony','low', false, 14),
  ('vac', 'Decide on catering approach: hotel-provided vs external',                 'low', false, 15),

  -- ── WEBSITE & MARKETING ──────────────────────────────────────────────
  ('vac', 'Build VAC 2027 website (early landing page with email capture first)',   'high', false, 16),
  ('vac', 'Set up ticket/booking system',                                            'high', false, 17),
  ('vac', 'Create marketing plan — channels, timeline, content',                    'medium', false, 18),
  ('vac', 'Design event logo and visual identity',                                   'medium', false, 19),
  ('vac', 'Create social media assets and launch announcement',                      'medium', false, 20),
  ('vac', 'Contact previous MAC/event attendees via email or WhatsApp',              'medium', false, 21),
  ('vac', 'Decide on sponsors strategy — approach, who to contact',                  'low', false, 22),

  -- ── OPERATIONS ───────────────────────────────────────────────────────
  ('vac', 'Organise registration flow — waivers, merch choice, welcome info',       'medium', false, 23),
  ('vac', 'Book photographer and videographer for event',                            'medium', false, 24),
  ('vac', 'Design and order event merch (T-shirts, tote bags)',                      'medium', false, 25),
  ('vac', 'Sort equipment: yoga mats, acro mats, sound system',                      'low', false, 26),
  ('vac', 'Design welcome package for attendees',                                    'low', false, 27),
  ('vac', 'Research transport options for attendees (airport → venue)',              'low', false, 28);


-- ── 3. Add VAC link ────────────────────────────────────────────────────

insert into flos_links (project_id, label, url, sort_order) values
  ('vac', 'MAC Master Checklist (reference)', 'https://docs.google.com/spreadsheets/d/1t8sCU77eAZZ0GzZZj1t6FlDRh-LfewHFaSE6wx_j0Kw/edit', 1)
on conflict do nothing;
