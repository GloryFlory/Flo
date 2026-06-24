'use client';

import { useState, useRef } from 'react';
import { Circle, CheckCircle2, Flag, Plus, X, ChevronDown, ChevronUp } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────

type Priority = 'high' | 'medium' | 'low';
type TaskStatus = 'todo' | 'done';

export interface Task {
  id: string;
  text: string;
  priority: Priority;
  status: TaskStatus;
}

export interface Milestone {
  id: string;
  label: string;
  due_date: string | null;
  done: boolean;
}

interface Props {
  projectId: string;
  initialTasks: Task[];
  initialMilestones: Milestone[];
  accentColor: string;
}

// ── Constants ──────────────────────────────────────────────────────────────

const PRIORITY_LABEL: Record<Priority, string> = {
  high: 'High priority', medium: 'Medium priority', low: 'Low priority',
};

const PRIORITY_COLOR: Record<Priority, string> = {
  high: '#f87171', medium: '#fbbf24', low: '#6b7280',
};

const PRIORITY_OPTIONS: Priority[] = ['high', 'medium', 'low'];

// ── Sub-components ─────────────────────────────────────────────────────────

function ProgressBar({ value, color, height = 4 }: { value: number; color: string; height?: number }) {
  return (
    <div className="w-full rounded-full overflow-hidden" style={{ height, background: 'rgba(255,255,255,0.06)' }}>
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{ width: `${Math.min(100, Math.round(value))}%`, background: color }}
      />
    </div>
  );
}

function pct(done: number, total: number) {
  return total === 0 ? 0 : (done / total) * 100;
}

// ── Main component ─────────────────────────────────────────────────────────

export default function ProjectInteractive({ projectId, initialTasks, initialMilestones, accentColor }: Props) {
  const [tasks,           setTasks]           = useState<Task[]>(initialTasks);
  const [milestones,      setMilestones]      = useState<Milestone[]>(initialMilestones);

  // Add task form
  const [showAddTask,     setShowAddTask]     = useState(false);
  const [newTaskText,     setNewTaskText]     = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>('medium');
  const [addingTask,      setAddingTask]      = useState(false);
  const taskInputRef = useRef<HTMLInputElement>(null);

  // Add milestone form
  const [showAddMs,       setShowAddMs]       = useState(false);
  const [newMsLabel,      setNewMsLabel]      = useState('');
  const [newMsDue,        setNewMsDue]        = useState('');
  const [addingMs,        setAddingMs]        = useState(false);
  const msInputRef = useRef<HTMLInputElement>(null);

  // ── Task actions ─────────────────────────────────────────────────────────

  async function toggleTask(task: Task) {
    const next: TaskStatus = task.status === 'done' ? 'todo' : 'done';
    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, status: next } : t));
    await fetch(`/api/flos/tasks/${task.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    });
  }

  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTaskText.trim() || addingTask) return;
    setAddingTask(true);

    const res = await fetch('/api/flos/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project_id: projectId, text: newTaskText.trim(), priority: newTaskPriority }),
    });

    if (res.ok) {
      const newTask = await res.json();
      setTasks(prev => [...prev, newTask]);
      setNewTaskText('');
      setShowAddTask(false);
    }
    setAddingTask(false);
  }

  // ── Milestone actions ─────────────────────────────────────────────────────

  async function toggleMilestone(m: Milestone) {
    const next = !m.done;
    setMilestones(prev => prev.map(ms => ms.id === m.id ? { ...ms, done: next } : ms));
    await fetch(`/api/flos/milestones/${m.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: next }),
    });
  }

  async function addMilestone(e: React.FormEvent) {
    e.preventDefault();
    if (!newMsLabel.trim() || addingMs) return;
    setAddingMs(true);

    const res = await fetch('/api/flos/milestones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project_id: projectId, label: newMsLabel.trim(), due_date: newMsDue || null }),
    });

    if (res.ok) {
      const newMs = await res.json();
      setMilestones(prev => [...prev, newMs]);
      setNewMsLabel('');
      setNewMsDue('');
      setShowAddMs(false);
    }
    setAddingMs(false);
  }

  async function deleteMilestone(id: string) {
    setMilestones(prev => prev.filter(m => m.id !== id));
    await fetch(`/api/flos/milestones/${id}`, { method: 'DELETE' });
  }

  // ── Derived data ──────────────────────────────────────────────────────────

  const doneTasks = tasks.filter(t => t.status === 'done');
  const totalPct  = pct(doneTasks.length, tasks.length);

  const tasksByPriority = (['high', 'medium', 'low'] as Priority[]).map(p => ({
    priority: p,
    tasks: tasks.filter(t => t.priority === p),
    done:  tasks.filter(t => t.priority === p && t.status === 'done').length,
  })).filter(g => g.tasks.length > 0);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Progress overview */}
      {tasks.length > 0 && (
        <div className="bg-white/[0.07] border border-white/[0.14] rounded-xl p-5 mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <p className="text-[10px] font-semibold text-white/45 uppercase tracking-widest">Progress</p>
            <p className="text-[12px] text-white/55">
              {doneTasks.length} / {tasks.length} tasks complete
            </p>
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[12px] text-white/55">Overall</span>
              <span className="text-[12px] font-medium" style={{ color: accentColor }}>
                {Math.round(totalPct)}%
              </span>
            </div>
            <ProgressBar value={totalPct} color={accentColor} height={6} />
          </div>

          <div className="flex flex-col gap-3">
            {tasksByPriority.map(g => (
              <div key={g.priority}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] text-white/50">{PRIORITY_LABEL[g.priority]}</span>
                  <span className="text-[11px] text-white/40">{g.done}/{g.tasks.length}</span>
                </div>
                <ProgressBar value={pct(g.done, g.tasks.length)} color={PRIORITY_COLOR[g.priority]} height={3} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Milestones ─────────────────────────────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-semibold text-white/45 uppercase tracking-widest">Milestones</p>
          <button
            onClick={() => { setShowAddMs(!showAddMs); setTimeout(() => msInputRef.current?.focus(), 50); }}
            className="flex items-center gap-1 text-[11px] text-white/40 hover:text-white/70 transition-colors"
          >
            {showAddMs ? <X size={11} strokeWidth={1.5} /> : <Plus size={11} strokeWidth={1.5} />}
            {showAddMs ? 'Cancel' : 'Add'}
          </button>
        </div>

        {/* Add milestone form */}
        {showAddMs && (
          <form onSubmit={addMilestone} className="mb-4 flex gap-2">
            <input
              ref={msInputRef}
              type="text"
              value={newMsLabel}
              onChange={e => setNewMsLabel(e.target.value)}
              placeholder="Milestone label…"
              className="flex-1 bg-white/[0.07] border border-white/[0.15] rounded-lg px-3 py-2 text-[13px] text-white/85 placeholder:text-white/30 outline-none focus:border-white/35 transition-colors"
            />
            <input
              type="date"
              value={newMsDue}
              onChange={e => setNewMsDue(e.target.value)}
              className="bg-white/[0.07] border border-white/[0.15] rounded-lg px-3 py-2 text-[13px] text-white/55 outline-none focus:border-white/35 transition-colors"
            />
            <button
              type="submit"
              disabled={!newMsLabel.trim() || addingMs}
              className="px-3 py-2 rounded-lg text-[12px] text-white/75 hover:text-white transition-colors disabled:opacity-30"
              style={{ background: `${accentColor}30`, border: `1px solid ${accentColor}55` }}
            >
              {addingMs ? '…' : 'Add'}
            </button>
          </form>
        )}

        {milestones.length === 0 && !showAddMs ? (
          <p className="text-[12px] text-white/35 italic">No milestones yet — add key dates here.</p>
        ) : (
          <div className="flex flex-col">
            {milestones.map(m => (
              <div key={m.id} className="flex items-start gap-3 py-2.5 border-b border-white/[0.10] last:border-none group">
                <button onClick={() => toggleMilestone(m)} className="flex-shrink-0 mt-0.5">
                  {m.done
                    ? <CheckCircle2 size={15} strokeWidth={1.5} style={{ color: accentColor }} />
                    : <Flag size={15} strokeWidth={1.5} className="text-white/35 hover:text-white/60 transition-colors" />
                  }
                </button>
                <div className="flex-1 min-w-0">
                  <span className={`text-[13px] leading-snug ${m.done ? 'line-through text-white/35' : 'text-white/80'}`}>
                    {m.label}
                  </span>
                </div>
                {m.due_date && (
                  <span className="text-[11px] text-white/40 flex-shrink-0">
                    {new Date(m.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  </span>
                )}
                <button
                  onClick={() => deleteMilestone(m.id)}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-white/30 hover:text-rose-400"
                >
                  <X size={12} strokeWidth={1.5} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Tasks ──────────────────────────────────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-semibold text-white/45 uppercase tracking-widest">Tasks</p>
          <button
            onClick={() => { setShowAddTask(!showAddTask); setTimeout(() => taskInputRef.current?.focus(), 50); }}
            className="flex items-center gap-1 text-[11px] text-white/40 hover:text-white/70 transition-colors"
          >
            {showAddTask ? <X size={11} strokeWidth={1.5} /> : <Plus size={11} strokeWidth={1.5} />}
            {showAddTask ? 'Cancel' : 'Add task'}
          </button>
        </div>

        {/* Add task form */}
        {showAddTask && (
          <form onSubmit={addTask} className="mb-5 flex flex-col gap-2">
            <input
              ref={taskInputRef}
              type="text"
              value={newTaskText}
              onChange={e => setNewTaskText(e.target.value)}
              placeholder="What needs doing?"
              className="w-full bg-white/[0.07] border border-white/[0.15] rounded-lg px-3 py-2.5 text-[13px] text-white/85 placeholder:text-white/30 outline-none focus:border-white/35 transition-colors"
            />
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                {PRIORITY_OPTIONS.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setNewTaskPriority(p)}
                    className={`text-[11px] px-2.5 py-1 rounded-md transition-all border ${
                      newTaskPriority === p
                        ? 'text-white/80 border-transparent'
                        : 'text-white/40 border-white/15 hover:text-white/65'
                    }`}
                    style={newTaskPriority === p ? { background: `${PRIORITY_COLOR[p]}25`, borderColor: `${PRIORITY_COLOR[p]}50` } : {}}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                disabled={!newTaskText.trim() || addingTask}
                className="ml-auto px-3 py-1 rounded-lg text-[12px] text-white/75 hover:text-white transition-colors disabled:opacity-30"
                style={{ background: `${accentColor}30`, border: `1px solid ${accentColor}55` }}
              >
                {addingTask ? 'Adding…' : 'Add task'}
              </button>
            </div>
          </form>
        )}

        {tasksByPriority.length === 0 && !showAddTask ? (
          <p className="text-[12px] text-white/35 italic">No tasks yet.</p>
        ) : (
          tasksByPriority.map(group => (
            <div key={group.priority} className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: PRIORITY_COLOR[group.priority] }} />
                <p className="text-[11px] text-white/50">{PRIORITY_LABEL[group.priority]}</p>
                <span className="text-[10px] text-white/30">{group.done}/{group.tasks.length}</span>
              </div>
              <div className="flex flex-col">
                {group.tasks.map(task => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task)}
                    className="flex items-start gap-3 py-2 text-left group w-full border-b border-white/[0.09] last:border-none"
                  >
                    <div className="flex-shrink-0 mt-0.5 text-white/35 group-hover:text-white/60 transition-colors">
                      {task.status === 'done'
                        ? <CheckCircle2 size={15} strokeWidth={1.5} style={{ color: accentColor }} />
                        : <Circle size={15} strokeWidth={1.5} />
                      }
                    </div>
                    <span className={`text-[13px] leading-snug transition-colors ${
                      task.status === 'done'
                        ? 'line-through text-white/30'
                        : 'text-white/75 group-hover:text-white/95'
                    }`}>
                      {task.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
