'use client';

import { useState, useEffect } from 'react';
import {
  type Block,
  type QuizQuestion,
  type Subsection,
  RUNTIMES_CONTENT, MODULE1_QUIZ,
  UI_LIBRARIES_CONTENT, MODULE2_QUIZ,
  FRAMEWORKS_CONTENT, MODULE3_QUIZ,
  DATABASES_CONTENT, MODULE4_QUIZ,
  BAAS_CONTENT, MODULE5_QUIZ,
  DEPLOYMENT_CONTENT, MODULE6_QUIZ,
  PAYMENTS_CONTENT, MODULE7_QUIZ,
  AI_MODELS_CONTENT, MODULE8_QUIZ,
} from './content';

// ── Types ──────────────────────────────────────────────────────────────────────

interface SectionData {
  key: string;
  title: string;
  description: string;
  content?: Subsection[];
  quiz?: QuizQuestion[];
}

interface ModuleData {
  key: string;
  title: string;
  sections: SectionData[];
}

interface StepAnswer {
  selected: number;
  correct: boolean;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const MODULES: ModuleData[] = [
  {
    key: 'dev-stack',
    title: 'Your dev stack',
    sections: [
      { key: 'runtimes',     title: 'Where does my code run?',      description: 'Runtimes: Node.js vs Deno vs Bun — what they are, how they differ, and which to reach for.', content: RUNTIMES_CONTENT,    quiz: MODULE1_QUIZ },
      { key: 'ui-libraries', title: 'How do I build UI?',           description: 'Libraries: React vs Vue vs Svelte vs vanilla — picking the right tool for the job.',          content: UI_LIBRARIES_CONTENT, quiz: MODULE2_QUIZ },
      { key: 'frameworks',   title: 'How do I structure a full app?',description: 'Frameworks: Next.js vs Nuxt vs Remix vs Astro — when each one makes sense.',                  content: FRAMEWORKS_CONTENT,  quiz: MODULE3_QUIZ },
      { key: 'payments',     title: 'How do I handle payments?',     description: 'Stripe vs Paddle vs Lemon Squeezy — fees, tax handling, and what each one costs you.',        content: PAYMENTS_CONTENT,    quiz: MODULE7_QUIZ },
      { key: 'databases',    title: 'Where do I store data?',        description: 'Databases: Postgres vs MySQL vs MongoDB vs SQLite — the tradeoffs that actually matter.',      content: DATABASES_CONTENT,   quiz: MODULE4_QUIZ },
      { key: 'baas',         title: 'Who manages my backend?',       description: 'BaaS: Supabase vs Firebase vs Appwrite — what you get out of the box and what you give up.',  content: BAAS_CONTENT,        quiz: MODULE5_QUIZ },
      { key: 'deployment',   title: 'How do I ship it?',             description: 'Deployment: Vercel vs Netlify vs Cloudflare vs VPS — cost, control, and cold starts.',        content: DEPLOYMENT_CONTENT,  quiz: MODULE6_QUIZ },
      { key: 'ai-models',    title: 'How do I add AI?',              description: 'Anthropic vs OpenAI vs open source models — capability, cost, and what to use when.',         content: AI_MODELS_CONTENT,   quiz: MODULE8_QUIZ },
    ],
  },
];

const ALL_SECTIONS = MODULES.flatMap((m) => m.sections);
const XP_PER_SECTION = 100;
const STORAGE_KEY  = 'learn_progress';
const STREAK_KEY   = 'learn_streak';

// ── Storage ────────────────────────────────────────────────────────────────────

function loadProgress(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set((JSON.parse(raw) as { read?: string[] }).read ?? []);
  } catch { return new Set(); }
}

function saveProgress(keys: Set<string>): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ read: [...keys] })); } catch {}
}

function loadAndUpdateStreak(): number {
  try {
    const today     = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) {
      localStorage.setItem(STREAK_KEY, JSON.stringify({ lastVisit: today, count: 1 }));
      return 1;
    }
    const data = JSON.parse(raw) as { lastVisit: string; count: number };
    if (data.lastVisit === today) return data.count;
    const count = data.lastVisit === yesterday ? data.count + 1 : 1;
    localStorage.setItem(STREAK_KEY, JSON.stringify({ lastVisit: today, count }));
    return count;
  } catch { return 1; }
}

// ── Levels ─────────────────────────────────────────────────────────────────────

const LEVELS = [
  { name: 'Curious',   min: 0,   color: '#6B7280' },
  { name: 'Builder',   min: 100, color: '#3B5BDB' },
  { name: 'Architect', min: 300, color: '#7C3AED' },
  { name: 'Operator',  min: 600, color: '#DC2626' },
  { name: 'Founder',   min: 800, color: '#D97706' },
];

function getLevel(xp: number) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].min) return LEVELS[i];
  }
  return LEVELS[0];
}

// ── Design tokens ──────────────────────────────────────────────────────────────

const T = {
  bg:          '#F4F5F7',
  sidebar:     '#ECEEF2',
  card:        '#FFFFFF',
  border:      'rgba(0,0,0,0.08)',
  accent:      '#3B5BDB',
  accentDim:   'rgba(59,91,219,0.08)',
  accentBorder:'rgba(59,91,219,0.25)',
  text:        '#1A1C23',
  muted:       'rgba(26,28,35,0.55)',
  faint:       'rgba(26,28,35,0.38)',
} as const;

const GREEN = { bg: 'rgba(34,197,94,0.10)',  border: 'rgba(34,197,94,0.35)',  text: '#15803D' };
const RED   = { bg: 'rgba(239,68,68,0.08)',  border: 'rgba(239,68,68,0.3)',   text: '#B91C1C' };

// ── renderInline ───────────────────────────────────────────────────────────────

function renderInline(text: string): React.ReactNode {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i} style={{ color: T.text, fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} style={{ fontFamily: 'ui-monospace,monospace', fontSize: '0.88em', background: 'rgba(59,91,219,0.07)', color: T.accent, padding: '1px 5px', borderRadius: 4 }}>{part.slice(1, -1)}</code>;
    return part;
  });
}

// ── RenderBlock ────────────────────────────────────────────────────────────────

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'h3':
      return <h3 style={{ fontSize: 16, fontWeight: 700, color: T.text, marginTop: 32, marginBottom: 10, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>{block.text}</h3>;

    case 'p':
      return <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.85, marginBottom: 14 }}>{renderInline(block.text)}</p>;

    case 'analogy':
      return (
        <div style={{ borderLeft: `3px solid ${T.accent}`, background: T.accentDim, borderRadius: '0 8px 8px 0', padding: '14px 18px', margin: '18px 0' }}>
          <p style={{ fontSize: 14, color: T.text, lineHeight: 1.8, margin: 0 }}>{renderInline(block.text)}</p>
        </div>
      );

    case 'ul':
      return (
        <ul style={{ margin: '10px 0 16px', paddingLeft: 0, listStyle: 'none' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: T.muted, lineHeight: 1.75, marginBottom: 8 }}>
              <span style={{ color: T.accent, flexShrink: 0, marginTop: 2, fontSize: 16, lineHeight: 1 }}>›</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol style={{ margin: '10px 0 16px', paddingLeft: 0, listStyle: 'none' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: T.muted, lineHeight: 1.75, marginBottom: 8 }}>
              <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: T.accentDim, color: T.accent, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{i + 1}</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );

    case 'code':
      return (
        <pre style={{ fontFamily: 'ui-monospace,"Cascadia Code","Fira Code",monospace', fontSize: 13, lineHeight: 1.65, background: 'rgba(26,28,35,0.04)', border: `1px solid ${T.border}`, borderRadius: 8, padding: '16px 20px', overflowX: 'auto', margin: '14px 0', color: T.text }}>
          <code>{block.text}</code>
        </pre>
      );

    case 'table':
      return (
        <div style={{ overflowX: 'auto', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} style={{ textAlign: i === 0 ? 'left' : 'center', padding: '10px 14px', background: T.accentDim, color: i === 0 ? T.faint : T.accent, fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: `2px solid ${T.accentBorder}`, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: `1px solid ${T.border}` }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '10px 14px', textAlign: ci === 0 ? 'left' : 'center', color: ci === 0 ? T.text : T.muted, fontWeight: ci === 0 ? 600 : 400, background: ri % 2 === 1 ? 'rgba(0,0,0,0.015)' : 'transparent' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

// ── StepQuizQuestion ───────────────────────────────────────────────────────────

function StepQuizQuestion({ question, onAnswer, answer }: {
  question: QuizQuestion;
  onAnswer: (idx: number) => void;
  answer?: StepAnswer;
}) {
  return (
    <div style={{ marginTop: 36, paddingTop: 32, borderTop: `2px dashed ${T.border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <div style={{ width: 24, height: 24, borderRadius: 6, background: T.accentDim, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
          </svg>
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.accent }}>Quick check</span>
      </div>

      <p style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 14, lineHeight: 1.55 }}>
        {renderInline(question.question)}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {question.options.map((opt, oi) => {
          const revealed  = !!answer;
          const isCorrect = oi === question.correct;
          const isSelected = answer?.selected === oi;
          let bg = 'transparent', border = `1px solid ${T.border}`, color: string = T.muted;
          let fw: number = 400;
          if (revealed) {
            if (isCorrect)       { bg = GREEN.bg; border = `1px solid ${GREEN.border}`; color = GREEN.text; fw = 600; }
            else if (isSelected) { bg = RED.bg;   border = `1px solid ${RED.border}`;   color = RED.text; }
          }
          return (
            <button key={oi} onClick={() => !revealed && onAnswer(oi)}
              style={{ width: '100%', textAlign: 'left', padding: '10px 14px', borderRadius: 8, fontSize: 13, lineHeight: 1.5, cursor: revealed ? 'default' : 'pointer', border, background: bg, color, fontWeight: fw, transition: 'all 0.15s' }}>
              {renderInline(opt)}
            </button>
          );
        })}
      </div>

      {answer && (
        <p style={{ marginTop: 12, fontSize: 12, fontWeight: 600, color: answer.correct ? GREEN.text : RED.text }}>
          {answer.correct
            ? '✓ Correct'
            : `✗ Correct answer: ${question.options[question.correct]}`}
        </p>
      )}
    </div>
  );
}

// ── LessonReader ───────────────────────────────────────────────────────────────

function LessonReader({ section, onBack, onComplete, alreadyComplete }: {
  section: SectionData;
  onBack: () => void;
  onComplete: () => void;
  alreadyComplete: boolean;
}) {
  const subsections = section.content ?? [];
  const questions   = section.quiz   ?? [];
  const totalSteps  = subsections.length;

  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<Record<number, StepAnswer>>({});

  const currentSub = subsections[step];
  const currentQ   = questions[step];
  const isLast     = step === totalSteps - 1;
  const pct        = totalSteps > 1 ? (step / (totalSteps - 1)) * 100 : 100;

  const handleAnswer = (idx: number) => {
    if (answers[step]) return;
    setAnswers((p) => ({ ...p, [step]: { selected: idx, correct: idx === currentQ.correct } }));
  };

  const go = (dir: 1 | -1) => {
    const next = step + dir;
    if (next < 0 || next >= totalSteps) return;
    setStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentSub) return null;

  return (
    <div>
      {/* Back */}
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: T.muted, background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 32px', transition: 'color 0.15s' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        All sections
      </button>

      {/* Header + progress */}
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.faint, marginBottom: 6 }}>
          Step {step + 1} of {totalSteps}
        </p>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: T.text, lineHeight: 1.2, marginBottom: 20 }}>
          {section.title}
        </h1>

        {/* Progress bar */}
        <div style={{ background: 'rgba(0,0,0,0.07)', borderRadius: 999, height: 6, overflow: 'hidden', marginBottom: 14 }}>
          <div style={{ background: `linear-gradient(90deg, ${T.accent}, #6366F1)`, height: '100%', borderRadius: 999, width: `${pct}%`, transition: 'width 0.45s cubic-bezier(0.16,1,0.3,1)' }} />
        </div>

        {/* Step dots */}
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {subsections.map((sub, i) => (
            <button key={i} onClick={() => { setStep(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }} title={sub.heading}
              style={{ width: i === step ? 28 : 8, height: 8, borderRadius: 999, padding: 0, border: 'none', cursor: 'pointer', background: i < step ? T.accent : i === step ? T.accent : 'rgba(0,0,0,0.12)', opacity: i <= step ? 1 : 0.35, transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }} />
          ))}
        </div>
      </div>

      {/* Content card */}
      <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 16, padding: '36px 40px', marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 24, lineHeight: 1.35 }}>
          {currentSub.heading}
        </h2>
        {currentSub.blocks.map((block, bi) => <RenderBlock key={bi} block={block} />)}
        {currentQ && <StepQuizQuestion question={currentQ} onAnswer={handleAnswer} answer={answers[step]} />}
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => go(-1)} disabled={step === 0}
          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 8, border: `1px solid ${T.border}`, background: 'transparent', color: T.muted, fontSize: 13, cursor: step === 0 ? 'default' : 'pointer', opacity: step === 0 ? 0.35 : 1, transition: 'opacity 0.15s' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          Previous
        </button>

        {isLast ? (
          <button onClick={alreadyComplete ? onBack : onComplete}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 26px', borderRadius: 8, border: 'none', background: alreadyComplete ? 'rgba(0,0,0,0.06)' : T.accent, color: alreadyComplete ? T.muted : '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
            {alreadyComplete ? '✓ Already complete — back' : 'Complete section'}
          </button>
        ) : (
          <button onClick={() => go(1)}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 22px', borderRadius: 8, border: 'none', background: T.accent, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'background 0.15s' }}>
            Next
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}

// ── CompletionOverlay ──────────────────────────────────────────────────────────

function CompletionOverlay({ title, xp, onContinue }: {
  title: string;
  xp: number;
  onContinue: () => void;
}) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(244,245,247,0.88)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        @keyframes overlayIn { from { opacity:0 } to { opacity:1 } }
        @keyframes cardIn    { from { opacity:0; transform:scale(0.9) translateY(20px) } to { opacity:1; transform:scale(1) translateY(0) } }
        @keyframes xpIn      { 0%{opacity:0;transform:translateY(10px) scale(0.8)} 50%{opacity:1;transform:translateY(-6px) scale(1.1)} 100%{opacity:1;transform:translateY(0) scale(1)} }
      `}</style>
      <div style={{ animation: 'overlayIn 0.25s ease' }}>
        <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 24, padding: '52px 56px', textAlign: 'center', maxWidth: 420, width: '90vw', boxShadow: '0 40px 100px rgba(0,0,0,0.14)', animation: 'cardIn 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
          <div style={{ fontSize: 52, marginBottom: 20 }}>🎯</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: T.accent, marginBottom: 14, animation: 'xpIn 0.5s 0.15s cubic-bezier(0.16,1,0.3,1) both' }}>
            +{XP_PER_SECTION} XP
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 8 }}>Section complete</h2>
          <p style={{ fontSize: 14, color: T.muted, marginBottom: 10, lineHeight: 1.6 }}>
            You finished <strong style={{ color: T.text }}>{title}</strong>.
          </p>
          <p style={{ fontSize: 13, color: T.faint, marginBottom: 32 }}>
            Total: {xp} XP
          </p>
          <button onClick={onContinue}
            style={{ padding: '13px 0', borderRadius: 10, border: 'none', background: T.accent, color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', transition: 'opacity 0.15s' }}>
            Keep going →
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function LearnPage() {
  const [readKeys,      setReadKeys]      = useState<Set<string>>(new Set());
  const [activeSec,     setActiveSec]     = useState<string | null>(null);
  const [completedSec,  setCompletedSec]  = useState<string | null>(null);
  const [xpFlash,       setXpFlash]       = useState(false);
  const [streak,        setStreak]        = useState(0);
  const [mounted,       setMounted]       = useState(false);

  useEffect(() => {
    setReadKeys(loadProgress());
    setStreak(loadAndUpdateStreak());
    setMounted(true);
  }, []);

  const markRead = (key: string) => {
    setReadKeys((prev) => {
      const next = new Set(prev);
      next.add(key);
      saveProgress(next);
      return next;
    });
    setXpFlash(true);
    setTimeout(() => setXpFlash(false), 1800);
  };

  const totalSections = ALL_SECTIONS.length;
  const readCount     = mounted ? readKeys.size : 0;
  const xp            = readCount * XP_PER_SECTION;
  const progressPct   = (readCount / totalSections) * 100;
  const level         = getLevel(xp);

  const activeSection = activeSec ? ALL_SECTIONS.find((s) => s.key === activeSec) : null;

  const handleComplete = (key: string) => {
    if (!readKeys.has(key)) {
      markRead(key);
      setCompletedSec(key);
    } else {
      setActiveSec(null);
    }
  };

  const handleOverlayContinue = () => {
    setCompletedSec(null);
    setActiveSec(null);
  };

  return (
    <div style={{ background: T.bg, color: T.text, minHeight: '100vh', fontFamily: 'inherit' }}>
      <style>{`
        @keyframes xpFloat { 0%{opacity:0;transform:translateY(4px)} 25%{opacity:1;transform:translateY(-14px)} 75%{opacity:1;transform:translateY(-18px)} 100%{opacity:0;transform:translateY(-22px)} }
        .section-card:hover { border-color: ${T.accentBorder} !important; box-shadow: 0 4px 20px rgba(59,91,219,0.08); transform: translateY(-1px); }
      `}</style>

      {completedSec && (
        <CompletionOverlay
          title={ALL_SECTIONS.find((s) => s.key === completedSec)?.title ?? ''}
          xp={xp}
          onContinue={handleOverlayContinue}
        />
      )}

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex' }}>

        {/* ── Sidebar ── */}
        <aside style={{ width: 256, flexShrink: 0, background: T.sidebar, borderRight: `1px solid ${T.border}`, padding: '32px 0', position: 'sticky', top: 80, height: 'calc(100vh - 80px)', overflowY: 'auto', alignSelf: 'flex-start' }}>

          {/* XP + level + streak */}
          <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}`, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', background: level.color, padding: '3px 10px', borderRadius: 999, transition: 'background 0.4s' }}>
                {level.name}
              </span>
              {streak > 0 && (
                <span style={{ fontSize: 13, color: T.muted, display: 'flex', alignItems: 'center', gap: 4 }}>
                  🔥 <strong style={{ color: '#D97706' }}>{streak}</strong>
                </span>
              )}
            </div>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 14 }}>
              <span style={{ fontSize: 40, fontWeight: 800, color: T.accent, lineHeight: 1, transition: 'all 0.4s' }}>{xp}</span>
              <span style={{ fontSize: 13, color: T.muted }}>XP</span>
              {xpFlash && (
                <span style={{ position: 'absolute', left: 0, top: -4, fontSize: 14, fontWeight: 700, color: GREEN.text, pointerEvents: 'none', animation: 'xpFloat 1.6s ease forwards' }}>
                  +{XP_PER_SECTION}
                </span>
              )}
            </div>

            <div style={{ background: 'rgba(0,0,0,0.08)', borderRadius: 999, height: 4, overflow: 'hidden', marginBottom: 8 }}>
              <div style={{ background: T.accent, height: '100%', borderRadius: 999, width: `${progressPct}%`, transition: 'width 0.6s ease' }} />
            </div>
            <p style={{ fontSize: 11, color: T.faint }}>{readCount} / {totalSections} complete</p>
          </div>

          {/* Section list */}
          <div style={{ padding: '0 12px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.faint, marginBottom: 8, padding: '0 8px' }}>
              Sections
            </p>
            {ALL_SECTIONS.map((sec, i) => {
              const isRead   = mounted && readKeys.has(sec.key);
              const isActive = activeSec === sec.key;
              return (
                <button key={sec.key} onClick={() => setActiveSec(sec.key)}
                  style={{ width: '100%', textAlign: 'left', padding: '8px 10px', borderRadius: 8, marginBottom: 2, background: isActive ? T.accentDim : 'transparent', border: `1px solid ${isActive ? T.accentBorder : 'transparent'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isRead ? T.accentDim : 'rgba(0,0,0,0.05)', border: `1px solid ${isRead ? T.accentBorder : 'rgba(0,0,0,0.10)'}`, fontSize: 9, fontWeight: 700, color: isRead ? T.accent : T.faint }}>
                    {isRead
                      ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      : String(i + 1).padStart(2, '0')}
                  </div>
                  <span style={{ fontSize: 12, color: isActive ? T.text : isRead ? T.faint : T.muted, lineHeight: 1.4, fontWeight: isActive ? 600 : 400 }}>
                    {sec.title}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ── Main ── */}
        <main style={{ flex: 1, padding: '48px 52px', minWidth: 0 }}>

          {activeSec && activeSection ? (
            <LessonReader
              key={activeSec}
              section={activeSection}
              onBack={() => setActiveSec(null)}
              onComplete={() => handleComplete(activeSec)}
              alreadyComplete={readKeys.has(activeSec)}
            />
          ) : (
            <>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.faint, marginBottom: 12 }}>
                Your dev stack
              </p>
              <h1 style={{ fontSize: 32, fontWeight: 700, color: T.text, marginBottom: 8 }}>
                {readCount === 0
                  ? 'Pick a section to start'
                  : readCount === totalSections
                  ? 'All done. Seriously.'
                  : `${totalSections - readCount} section${totalSections - readCount === 1 ? '' : 's'} left`}
              </h1>
              <p style={{ fontSize: 14, color: T.muted, marginBottom: 44 }}>
                {readCount === 0
                  ? 'Each section takes 5–10 minutes. Questions are built in — no cramming at the end.'
                  : `${readCount} of ${totalSections} complete · ${xp} XP`}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
                {ALL_SECTIONS.map((section, i) => {
                  const isRead = mounted && readKeys.has(section.key);
                  const steps  = section.content?.length ?? 0;
                  const qs     = section.quiz?.length ?? 0;
                  return (
                    <button key={section.key} onClick={() => setActiveSec(section.key)}
                      className="section-card"
                      style={{ textAlign: 'left', padding: '24px', borderRadius: 16, background: T.card, border: `1px solid ${isRead ? T.accentBorder : T.border}`, cursor: 'pointer', display: 'flex', gap: 16, alignItems: 'flex-start', transition: 'all 0.2s' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isRead ? T.accentDim : 'rgba(0,0,0,0.04)', border: `1px solid ${isRead ? T.accentBorder : 'rgba(0,0,0,0.08)'}`, fontSize: 13, fontWeight: 700, color: isRead ? T.accent : T.faint }}>
                        {isRead
                          ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          : String(i + 1).padStart(2, '0')}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 5 }}>{section.title}</p>
                        <p style={{ fontSize: 12, color: T.faint, lineHeight: 1.5, marginBottom: 10 }}>{section.description}</p>
                        <p style={{ fontSize: 11, color: isRead ? T.accent : T.faint, fontWeight: isRead ? 600 : 400 }}>
                          {isRead ? `✓ Complete` : `${steps} steps · ${qs} questions`}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
