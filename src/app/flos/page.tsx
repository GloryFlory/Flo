'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mic, Ticket, Users, BookOpen, Grid2x2, Heart,
  Briefcase, Plane, RefreshCw, Circle, CheckCircle2,
  ChevronRight, type LucideProps,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────

type Status   = 'active' | 'planning' | 'attention' | 'ongoing' | 'future';
type Category = 'business' | 'creative' | 'personal' | 'future';
type Priority = 'high' | 'medium' | 'low';

interface Task {
  id: string;
  text: string;
  priority: Priority;
  status: 'todo' | 'done';
}

interface Project {
  id: string;
  name: string;
  category: Category;
  status: Status;
  statusLabel: string;
  accentColor: string;
  icon: string;
  tags: string[];
  quickActions: Task[];
}

interface FocusItem {
  id: string;
  text: string;
  project: string;
  reasoning: string;
}

// ── Logo + icon maps ───────────────────────────────────────────────────────

const PROJECT_LOGOS: Record<string, string> = {
  gwtf:     '/podcast-logo.png',
  mac:      '/mac-logo.webp',
  flowgrid: '/flow-grid.png',
};

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Mic, Ticket, Users, BookOpen, Grid2x2, Heart, Briefcase, Plane,
};

function ProjectAvatar({ id, icon, accentColor, size = 28 }: {
  id: string; icon: string; accentColor: string; size?: number;
}) {
  const logoSrc  = PROJECT_LOGOS[id];
  const IconComp = ICON_MAP[icon] ?? Circle;
  if (logoSrc) {
    return (
      <div className="rounded-lg overflow-hidden flex-shrink-0" style={{ width: size, height: size }}>
        <Image src={logoSrc} alt={id} width={size} height={size} className="w-full h-full object-contain" />
      </div>
    );
  }
  return (
    <div className="rounded-lg flex-shrink-0 flex items-center justify-center"
      style={{ width: size, height: size, background: `${accentColor}28` }}>
      <IconComp size={size * 0.55} strokeWidth={1.5} color={accentColor} />
    </div>
  );
}

// ── Style helpers ──────────────────────────────────────────────────────────

const STATUS_STYLES: Record<Status, string> = {
  active:    'bg-emerald-500/20 text-emerald-300 border border-emerald-500/35',
  planning:  'bg-amber-500/20 text-amber-300 border border-amber-500/35',
  attention: 'bg-rose-500/20 text-rose-300 border border-rose-500/35',
  ongoing:   'bg-sky-500/20 text-sky-300 border border-sky-500/35',
  future:    'bg-white/10 text-white/55 border border-white/20',
};

const CATEGORY_LABELS: Record<Category | 'all', string> = {
  all: 'All', business: 'Business', creative: 'Creative',
  personal: 'Personal', future: 'Future',
};

// ── Hardcoded focus (shown before first AI refresh) ────────────────────────

const INITIAL_FOCUS: FocusItem[] = [
  {
    id: 'f1',
    text: 'Hit Refresh to load your AI-suggested focus for today',
    project: 'FLOs',
    reasoning: 'Claude will read all your active projects and tasks and pick the 3 highest-leverage things for today.',
  },
];

// ── Components ─────────────────────────────────────────────────────────────

function FocusCard({ item, onDone }: { item: FocusItem; onDone: (id: string) => void }) {
  const [done, setDone]             = useState(false);
  const [showReason, setShowReason] = useState(false);

  function handleToggle() {
    setDone(true);
    setTimeout(() => onDone(item.id), 350);
  }

  return (
    <div className={`transition-all duration-300 ${done ? 'opacity-0 scale-95' : ''}`}>
      <div className="flex items-start gap-3 py-3 border-b border-white/10 last:border-none">
        <button onClick={handleToggle} className="mt-0.5 flex-shrink-0 text-white/35 hover:text-emerald-400 transition-colors">
          {done
            ? <CheckCircle2 size={18} strokeWidth={1.5} className="text-emerald-400" />
            : <Circle size={18} strokeWidth={1.5} />}
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white/90 leading-snug mb-1.5">{item.text}</p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-white/55 border border-white/15">
              {item.project}
            </span>
            <button onClick={() => setShowReason(!showReason)}
              className="text-[11px] text-white/40 hover:text-white/65 transition-colors">
              {showReason ? 'hide reason' : 'why this?'}
            </button>
          </div>
          {showReason && (
            <p className="mt-2 text-[12px] text-white/55 leading-relaxed border-l-2 border-white/20 pl-3">
              {item.reasoning}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [tasks, setTasks] = useState<Task[]>(project.quickActions);

  async function toggleTask(task: Task) {
    const nextStatus = task.status === 'done' ? 'todo' : 'done';
    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, status: nextStatus } : t));
    await fetch(`/api/flos/tasks/${task.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus }),
    });
  }

  return (
    <div
      className="bg-white/[0.06] border border-white/[0.14] rounded-xl p-5 flex flex-col gap-4 hover:bg-white/[0.09] transition-colors"
      style={{ borderLeftColor: project.accentColor, borderLeftWidth: 3 }}
    >
      {/* Card header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <ProjectAvatar id={project.id} icon={project.icon} accentColor={project.accentColor} size={28} />
          <h3 className="text-sm font-medium text-white leading-tight">{project.name}</h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${STATUS_STYLES[project.status]}`}>
            {project.statusLabel}
          </span>
          {project.tags.map(tag => (
            <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-white/55 border border-white/15">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quick-action tasks */}
      <div className="flex flex-col gap-0.5">
        {tasks.map(task => (
          <button key={task.id} onClick={() => toggleTask(task)}
            className="flex items-start gap-2.5 py-1.5 text-left group w-full">
            <div className={`mt-0.5 w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
              task.status === 'done'
                ? 'bg-emerald-500/25 border-emerald-500/50'
                : 'border-white/30 group-hover:border-white/55'
            }`}>
              {task.status === 'done' && (
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                  <polyline points="2 6 5 9 10 3" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className={`text-[13px] leading-snug transition-colors ${
              task.status === 'done' ? 'line-through text-white/30' : 'text-white/70 group-hover:text-white/90'
            }`}>
              {task.text}
            </span>
          </button>
        ))}
      </div>

      <Link href={`/flos/${project.id}`}
        className="flex items-center gap-1.5 text-[11px] text-white/40 hover:text-white/70 transition-colors mt-auto pt-1 w-fit group">
        Open area
        <ChevronRight size={11} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function FLOsPage() {
  const [projects, setProjects]         = useState<Project[]>([]);
  const [loading, setLoading]           = useState(true);
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all');
  const [focusItems, setFocusItems]     = useState<FocusItem[]>(INITIAL_FOCUS);
  const [capture, setCapture]           = useState('');
  const [captures, setCaptures]         = useState<{ id: string; text: string; ts: string }[]>([]);
  const [refreshing, setRefreshing]     = useState(false);

  const now     = new Date();
  const hour    = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const today   = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch('/api/flos/data');
      if (!res.ok) { setLoading(false); return; }
      const { projects: projectRows, tasks: taskRows } = await res.json();
      const merged: Project[] = projectRows.map((p: Record<string, unknown>) => ({
        id:           p.id,
        name:         p.name,
        category:     p.category as Category,
        status:       p.status as Status,
        statusLabel:  p.status_label,
        accentColor:  p.accent_color,
        icon:         p.icon,
        tags:         (p.tags as string[]) ?? [],
        quickActions: (taskRows as Record<string, unknown>[])
          .filter(t => t.project_id === p.id)
          .map(t => ({ id: t.id, text: t.text, priority: t.priority as Priority, status: t.status as 'todo' | 'done' })),
      }));
      setProjects(merged);
      setLoading(false);
    }
    load();
  }, []);

  const filtered       = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);
  const attentionCount = projects.filter(p => p.status === 'attention').length;

  function removeFocusItem(id: string) {
    setFocusItems(prev => prev.filter(f => f.id !== id));
    if (!id.startsWith('ai-')) {
      fetch(`/api/flos/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'done' }),
      });
    }
  }

  async function submitCapture(e: React.FormEvent) {
    e.preventDefault();
    if (!capture.trim()) return;
    const text = capture.trim();
    setCapture('');
    setCaptures(prev => [{ id: Date.now().toString(), text, ts: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) }, ...prev]);
    await fetch('/api/flos/captures', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) });
  }

  const refreshFocus = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch('/api/flos/focus', { method: 'POST' });
      if (res.ok) {
        const items = await res.json();
        setFocusItems(items.map((item: { id: string; text: string; project: string; reasoning: string }) => ({
          id: item.id, text: item.text, project: item.project, reasoning: item.reasoning,
        })));
      }
    } catch { /* keep existing */ }
    setRefreshing(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">

      {/* Ambient glow */}
      <div className="fixed top-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% -10%, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-6 py-12">

        {/* ── Header ── */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-[2.75rem] font-extralight tracking-[0.18em] uppercase leading-none mb-3">
                FL<span className="text-white/30">Os</span>
              </h1>
              <p className="text-[13px] text-white/50 tracking-wide">
                {greeting}, Flo &nbsp;·&nbsp; {today}
              </p>
            </div>
            <button
              onClick={() => { document.cookie = 'flos_session=; Max-Age=0; path=/'; window.location.href = '/flos/login'; }}
              className="text-xs text-white/30 hover:text-white/55 transition-colors mt-1"
            >
              Sign out
            </button>
          </div>
          {/* Project color strip */}
          <div className="flex gap-px overflow-hidden rounded-full" style={{ height: 2 }}>
            {!loading && projects.length > 0
              ? projects.map(p => <div key={p.id} className="flex-1" style={{ background: p.accentColor, opacity: 0.7 }} />)
              : <div className="flex-1 bg-white/20 rounded-full" />
            }
          </div>
        </div>

        {/* ── Metrics ── */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Active areas',   value: String(projects.length) },
            { label: "Today's focus",  value: String(focusItems.length) },
            { label: 'Need attention', value: String(attentionCount), warn: attentionCount > 0 },
            { label: 'Captured today', value: String(captures.length) },
          ].map(m => (
            <div key={m.label} className="bg-white/[0.07] border border-white/[0.14] rounded-xl p-4">
              <p className="text-[11px] text-white/45 mb-2 uppercase tracking-wider">{m.label}</p>
              <p className={`text-2xl font-light ${m.warn ? 'text-rose-400' : 'text-white/85'}`}>
                {loading ? '—' : m.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── Today's Focus ── */}
        <div className="bg-white/[0.07] border border-white/[0.14] rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xs font-semibold text-white/55 uppercase tracking-wider">Today&apos;s focus</h2>
              <p className="text-[11px] text-white/40 mt-0.5">AI suggested · tap to complete · &quot;why this?&quot; for reasoning</p>
            </div>
            <button onClick={refreshFocus} disabled={refreshing}
              className="flex items-center gap-1.5 text-[11px] text-white/45 hover:text-white/70 transition-colors disabled:opacity-40">
              <RefreshCw size={12} strokeWidth={1.5} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Thinking...' : 'Refresh'}
            </button>
          </div>
          {focusItems.length > 0
            ? focusItems.map(item => <FocusCard key={item.id} item={item} onDone={removeFocusItem} />)
            : <p className="text-sm text-white/45 py-2">All done. Hit refresh for new priorities.</p>
          }
        </div>

        {/* ── Capture ── */}
        <div className="bg-white/[0.07] border border-white/[0.14] rounded-xl p-5 mb-10">
          <h2 className="text-xs font-semibold text-white/55 uppercase tracking-wider mb-1">Capture</h2>
          <p className="text-[11px] text-white/40 mb-4">New idea, update, or thought — drop it here. AI will route it to the right project.</p>
          <form onSubmit={submitCapture} className="flex gap-2">
            <input type="text" value={capture} onChange={e => setCapture(e.target.value)}
              placeholder="e.g. Just heard back from the Bali venue — they're full in March"
              className="flex-1 bg-white/[0.07] border border-white/[0.15] rounded-lg px-4 py-2.5 text-sm text-white/85 placeholder:text-white/30 outline-none focus:border-white/35 transition-colors" />
            <button type="submit" disabled={!capture.trim()}
              className="px-4 py-2.5 bg-white/[0.10] hover:bg-white/[0.16] disabled:opacity-30 text-white/70 hover:text-white/90 rounded-lg text-sm transition-all border border-white/[0.15]">
              Save
            </button>
          </form>
          {captures.length > 0 && (
            <div className="mt-4 flex flex-col gap-2 pt-3 border-t border-white/[0.12]">
              {captures.map(c => (
                <div key={c.id} className="flex items-start gap-3 text-[12px]">
                  <span className="text-white/35 flex-shrink-0 mt-0.5">{c.ts}</span>
                  <span className="text-white/60 leading-relaxed">{c.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── All Areas ── */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xs font-semibold text-white/55 uppercase tracking-wider">All areas</h2>
          <div className="flex gap-1.5">
            {(['all', 'business', 'creative', 'personal', 'future'] as const).map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`text-[11px] px-3 py-1 rounded-md transition-all ${
                  activeFilter === f
                    ? 'bg-white/15 text-white/90 border border-white/30'
                    : 'text-white/45 hover:text-white/70'
                }`}>
                {CATEGORY_LABELS[f]}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white/[0.05] border border-white/[0.10] rounded-xl p-5 h-44 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        )}

        {/* ── Footer ── */}
        <div className="mt-14 pt-6 border-t border-white/[0.12] flex items-center justify-between">
          <p className="text-[11px] text-white/30 tracking-wider">FL<span className="text-white/15">Os</span></p>
          <p className="text-[11px] text-white/30">v0.2 · Live from Supabase</p>
        </div>

      </div>
    </div>
  );
}
