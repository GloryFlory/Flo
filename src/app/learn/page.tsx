'use client';

import { useState, useEffect } from 'react';
import {
  type Block,
  type QuizQuestion,
  type Subsection,
  RUNTIMES_CONTENT,
  MODULE1_QUIZ,
  UI_LIBRARIES_CONTENT,
  MODULE2_QUIZ,
  FRAMEWORKS_CONTENT,
  MODULE3_QUIZ,
  DATABASES_CONTENT,
  MODULE4_QUIZ,
  BAAS_CONTENT,
  MODULE5_QUIZ,
  DEPLOYMENT_CONTENT,
  MODULE6_QUIZ,
} from './content';

// ── Types ──────────────────────────────────────────────────────────────────

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

// ── Data ───────────────────────────────────────────────────────────────────

const MODULES: ModuleData[] = [
  {
    key: 'dev-stack',
    title: 'Your dev stack',
    sections: [
      {
        key: 'runtimes',
        title: 'Where does my code run?',
        description: 'Runtimes: Node.js vs Deno vs Bun — what they are, how they differ, and which to reach for.',
        content: RUNTIMES_CONTENT,
        quiz: MODULE1_QUIZ,
      },
      {
        key: 'ui-libraries',
        title: 'How do I build UI?',
        description: 'Libraries: React vs Vue vs Svelte vs vanilla — picking the right tool for the job.',
        content: UI_LIBRARIES_CONTENT,
        quiz: MODULE2_QUIZ,
      },
      {
        key: 'frameworks',
        title: 'How do I structure a full app?',
        description: 'Frameworks: Next.js vs Nuxt vs Remix vs Astro — when each one makes sense.',
        content: FRAMEWORKS_CONTENT,
        quiz: MODULE3_QUIZ,
      },
      {
        key: 'payments',
        title: 'How do I handle payments?',
        description: 'Stripe vs Paddle vs Lemon Squeezy — fees, tax handling, and what each one costs you.',
      },
      {
        key: 'databases',
        title: 'Where do I store data?',
        description: 'Databases: Postgres vs MySQL vs MongoDB vs SQLite — the tradeoffs that actually matter.',
        content: DATABASES_CONTENT,
        quiz: MODULE4_QUIZ,
      },
      {
        key: 'baas',
        title: 'Who manages my backend?',
        description: 'BaaS: Supabase vs Firebase vs Appwrite — what you get out of the box and what you give up.',
        content: BAAS_CONTENT,
        quiz: MODULE5_QUIZ,
      },
      {
        key: 'deployment',
        title: 'How do I ship it?',
        description: 'Deployment: Vercel vs Netlify vs Cloudflare vs VPS — cost, control, and cold starts.',
        content: DEPLOYMENT_CONTENT,
        quiz: MODULE6_QUIZ,
      },
      {
        key: 'ai-models',
        title: 'How do I add AI?',
        description: 'Anthropic vs OpenAI vs open source models — capability, cost, and what to use when.',
      },
    ],
  },
];

const XP_PER_SECTION = 100;
const STORAGE_KEY = 'learn_progress';

// ── localStorage helpers ────────────────────────────────────────────────────

function loadProgress(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as { read?: string[] };
    return new Set(parsed.read ?? []);
  } catch {
    return new Set();
  }
}

function saveProgress(keys: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ read: [...keys] }));
  } catch {
    // ignore
  }
}

// ── Design tokens ──────────────────────────────────────────────────────────

const T = {
  bg: '#F4F5F7',
  sidebar: '#ECEEF2',
  card: '#FFFFFF',
  border: 'rgba(0,0,0,0.08)',
  accent: '#3B5BDB',
  accentDim: 'rgba(59,91,219,0.08)',
  accentBorder: 'rgba(59,91,219,0.25)',
  text: '#1A1C23',
  muted: 'rgba(26,28,35,0.55)',
  faint: 'rgba(26,28,35,0.38)',
} as const;

// ── Inline text renderer ────────────────────────────────────────────────────
// Handles **bold** and `code` within content strings.

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: T.text, fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.88em',
            background: 'rgba(59,91,219,0.07)',
            color: T.accent,
            padding: '1px 5px',
            borderRadius: 4,
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

// ── Block renderer ─────────────────────────────────────────────────────────

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'h3':
      return (
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: T.text,
            marginTop: 32,
            marginBottom: 10,
            paddingTop: 24,
            borderTop: `1px solid ${T.border}`,
          }}
        >
          {block.text}
        </h3>
      );

    case 'p':
      return (
        <p
          style={{
            fontSize: 14,
            color: T.muted,
            lineHeight: 1.85,
            marginBottom: 14,
          }}
        >
          {renderInline(block.text)}
        </p>
      );

    case 'analogy':
      return (
        <div
          style={{
            borderLeft: `3px solid ${T.accent}`,
            background: T.accentDim,
            borderRadius: '0 8px 8px 0',
            padding: '14px 18px',
            margin: '18px 0',
          }}
        >
          <p style={{ fontSize: 14, color: T.text, lineHeight: 1.8, margin: 0 }}>
            {renderInline(block.text)}
          </p>
        </div>
      );

    case 'ul':
      return (
        <ul style={{ margin: '10px 0 16px', paddingLeft: 0, listStyle: 'none' }}>
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
                fontSize: 14,
                color: T.muted,
                lineHeight: 1.75,
                marginBottom: 8,
              }}
            >
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
            <li
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                fontSize: 14,
                color: T.muted,
                lineHeight: 1.75,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: T.accentDim,
                  color: T.accent,
                  fontSize: 11,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 1,
                }}
              >
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );

    case 'code':
      return (
        <pre
          style={{
            fontFamily: 'ui-monospace, "Cascadia Code", "Fira Code", monospace',
            fontSize: 13,
            lineHeight: 1.65,
            background: 'rgba(26,28,35,0.04)',
            border: `1px solid ${T.border}`,
            borderRadius: 8,
            padding: '16px 20px',
            overflowX: 'auto',
            margin: '14px 0',
            color: T.text,
          }}
        >
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
                  <th
                    key={i}
                    style={{
                      textAlign: i === 0 ? 'left' : 'center',
                      padding: '10px 14px',
                      background: T.accentDim,
                      color: i === 0 ? T.faint : T.accent,
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderBottom: `2px solid ${T.accentBorder}`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: `1px solid ${T.border}` }}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: '10px 14px',
                        textAlign: ci === 0 ? 'left' : 'center',
                        color: ci === 0 ? T.text : T.muted,
                        fontWeight: ci === 0 ? 600 : 400,
                        background: ri % 2 === 1 ? 'rgba(0,0,0,0.015)' : 'transparent',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function RenderContent({ subsections }: { subsections: Subsection[] }) {
  return (
    <div>
      {subsections.map((sub, si) => (
        <div key={si} style={{ marginBottom: 8 }}>
          <h3
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: T.text,
              marginBottom: 14,
              marginTop: si > 0 ? 32 : 0,
              paddingTop: si > 0 ? 28 : 0,
              borderTop: si > 0 ? `1px solid ${T.border}` : 'none',
            }}
          >
            {sub.heading}
          </h3>
          {sub.blocks.map((block, bi) => (
            <RenderBlock key={bi} block={block} />
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Quiz card ──────────────────────────────────────────────────────────────

const GREEN  = { bg: 'rgba(34,197,94,0.10)',  border: 'rgba(34,197,94,0.35)',  text: '#15803D' };
const RED    = { bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.3)',   text: '#B91C1C' };

function QuizCard({ questions, title }: { questions: QuizQuestion[]; title: string }) {
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const answer = (id: string, idx: number) => {
    if (revealed.has(id)) return;
    setSelections((p) => ({ ...p, [id]: idx }));
    setRevealed((p) => new Set([...p, id]));
  };

  const score = questions.filter(
    (q) => revealed.has(q.id) && selections[q.id] === q.correct,
  ).length;
  const done = revealed.size === questions.length;

  return (
    <div
      style={{
        background: T.card,
        border: `1px solid ${T.border}`,
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px 28px',
          borderBottom: `1px solid ${T.border}`,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: T.accentDim,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 2 }}>
            Quiz — {title}
          </p>
          <p style={{ fontSize: 12, color: T.faint }}>
            {done
              ? `${score} / ${questions.length} correct`
              : `${revealed.size} of ${questions.length} answered`}
          </p>
        </div>
        {done && (
          <div
            style={{
              padding: '4px 14px',
              borderRadius: 999,
              background: score === questions.length ? GREEN.bg : T.accentDim,
              border: `1px solid ${score === questions.length ? GREEN.border : T.accentBorder}`,
              color: score === questions.length ? GREEN.text : T.accent,
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {score}/{questions.length}
          </div>
        )}
      </div>

      {/* Questions */}
      <div style={{ padding: '8px 0' }}>
        {questions.map((q, qi) => {
          const isRevealed = revealed.has(q.id);
          const selected = selections[q.id];
          return (
            <div
              key={q.id}
              style={{
                padding: '20px 28px',
                borderBottom: qi < questions.length - 1 ? `1px solid ${T.border}` : 'none',
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: T.text,
                  marginBottom: 14,
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: T.faint, marginRight: 8 }}>{qi + 1}.</span>
                {renderInline(q.question)}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {q.options.map((opt, oi) => {
                  let style: React.CSSProperties = {
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 14px',
                    borderRadius: 8,
                    fontSize: 13,
                    lineHeight: 1.5,
                    cursor: isRevealed ? 'default' : 'pointer',
                    border: `1px solid ${T.border}`,
                    background: 'transparent',
                    color: T.muted,
                    transition: 'all 0.15s',
                  };

                  if (isRevealed) {
                    if (oi === q.correct) {
                      style = { ...style, background: GREEN.bg, border: `1px solid ${GREEN.border}`, color: GREEN.text, fontWeight: 600 };
                    } else if (oi === selected) {
                      style = { ...style, background: RED.bg, border: `1px solid ${RED.border}`, color: RED.text };
                    }
                  }

                  return (
                    <button key={oi} onClick={() => answer(q.id, oi)} style={style}>
                      {renderInline(opt)}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────

function IconCheck({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconChevron({ down }: { down: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: down ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function LearnPage() {
  const [readKeys, setReadKeys] = useState<Set<string>>(new Set());
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const [activeModuleKey, setActiveModuleKey] = useState(MODULES[0].key);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setReadKeys(loadProgress());
    setMounted(true);
  }, []);

  const markRead = (key: string) => {
    setReadKeys((prev) => {
      const next = new Set(prev);
      next.add(key);
      saveProgress(next);
      return next;
    });
  };

  const toggleExpand = (key: string) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const activeModule = MODULES.find((m) => m.key === activeModuleKey) ?? MODULES[0];
  const totalSections = MODULES.reduce((n, m) => n + m.sections.length, 0);
  const readCount = mounted ? readKeys.size : 0;
  const xp = readCount * XP_PER_SECTION;
  const progressPct = totalSections > 0 ? (readCount / totalSections) * 100 : 0;
  const moduleReadCount = mounted
    ? activeModule.sections.filter((s) => readKeys.has(s.key)).length
    : 0;

  // Combine quiz questions from all sections in the active module
  const allQuizQuestions = activeModule.sections.flatMap((s) => s.quiz ?? []);
  const activeQuiz = allQuizQuestions.length > 0 ? allQuizQuestions : null;

  return (
    <div style={{ background: T.bg, color: T.text, minHeight: '100vh', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex' }}>

        {/* ── Sidebar ── */}
        <aside
          style={{
            width: 256,
            flexShrink: 0,
            background: T.sidebar,
            borderRight: `1px solid ${T.border}`,
            padding: '36px 0',
            position: 'sticky',
            top: 80,
            height: 'calc(100vh - 80px)',
            overflowY: 'auto',
            alignSelf: 'flex-start',
          }}
        >
          {/* Progress block */}
          <div style={{ padding: '0 24px 28px', borderBottom: `1px solid ${T.border}`, marginBottom: 24 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.faint, marginBottom: 16 }}>
              Progress
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
              <span style={{ fontSize: 36, fontWeight: 800, color: T.accent, lineHeight: 1 }}>{xp}</span>
              <span style={{ fontSize: 13, color: T.muted }}>XP</span>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.08)', borderRadius: 999, height: 4, marginBottom: 10, overflow: 'hidden' }}>
              <div
                style={{
                  background: T.accent,
                  height: '100%',
                  borderRadius: 999,
                  width: `${progressPct}%`,
                  transition: 'width 0.5s ease',
                }}
              />
            </div>
            <p style={{ fontSize: 12, color: T.faint }}>{readCount} / {totalSections} sections read</p>
          </div>

          {/* Module nav */}
          <div style={{ padding: '0 16px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.faint, marginBottom: 10, padding: '0 8px' }}>
              Modules
            </p>
            {MODULES.map((mod) => {
              const modRead = mounted ? mod.sections.filter((s) => readKeys.has(s.key)).length : 0;
              const isActive = mod.key === activeModuleKey;
              return (
                <button
                  key={mod.key}
                  onClick={() => setActiveModuleKey(mod.key)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderRadius: 8,
                    background: isActive ? T.accentDim : 'transparent',
                    border: `1px solid ${isActive ? T.accentBorder : 'transparent'}`,
                    color: isActive ? T.text : T.muted,
                    cursor: 'pointer',
                    marginBottom: 4,
                    transition: 'all 0.15s',
                  }}
                >
                  <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{mod.title}</p>
                  <p style={{ fontSize: 11, color: T.faint }}>{modRead} / {mod.sections.length} done</p>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ── Main ── */}
        <main style={{ flex: 1, padding: '48px 52px', minWidth: 0 }}>

          {/* Module heading */}
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.faint, marginBottom: 14 }}>
            Module
          </p>
          <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2, marginBottom: 8, color: T.text }}>
            {activeModule.title}
          </h1>
          <p style={{ fontSize: 14, color: T.muted, marginBottom: 44 }}>
            {moduleReadCount} of {activeModule.sections.length} sections completed
          </p>

          {/* Section cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {activeModule.sections.map((section, i) => {
              const isRead = mounted && readKeys.has(section.key);
              const isExpanded = expandedKeys.has(section.key);
              const hasContent = Boolean(section.content);

              return (
                <div
                  key={section.key}
                  style={{
                    background: T.card,
                    border: `1px solid ${isRead ? T.accentBorder : T.border}`,
                    borderRadius: 12,
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                >
                  {/* Header row */}
                  <button
                    onClick={() => toggleExpand(section.key)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'inherit',
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isRead ? T.accentDim : 'rgba(0,0,0,0.04)',
                        border: `1px solid ${isRead ? T.accentBorder : 'rgba(0,0,0,0.10)'}`,
                        fontSize: 12,
                        fontWeight: 700,
                        color: isRead ? T.accent : T.faint,
                        transition: 'all 0.2s',
                      }}
                    >
                      {isRead ? <IconCheck size={14} /> : String(i + 1).padStart(2, '0')}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 15, fontWeight: 600, color: isRead ? T.muted : T.text, marginBottom: 3 }}>
                        {section.title}
                      </p>
                      <p style={{ fontSize: 13, color: T.faint, lineHeight: 1.5 }}>
                        {section.description}
                      </p>
                    </div>

                    <IconChevron down={isExpanded} />
                  </button>

                  {/* Expanded body */}
                  {isExpanded && (
                    <div
                      style={{
                        borderTop: `1px solid ${T.border}`,
                        padding: hasContent ? '32px 36px' : '24px 24px 24px 74px',
                      }}
                    >
                      {hasContent && section.content ? (
                        <RenderContent subsections={section.content} />
                      ) : (
                        <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.8, marginBottom: 20 }}>
                          Content for this section is coming soon. This will cover everything you need to know about{' '}
                          <span style={{ color: T.text, fontWeight: 500 }}>{section.title.toLowerCase()}</span>.
                        </p>
                      )}

                      {/* Mark as read */}
                      <div style={{ marginTop: hasContent ? 28 : 0, paddingTop: hasContent ? 24 : 0, borderTop: hasContent ? `1px solid ${T.border}` : 'none' }}>
                        {isRead ? (
                          <span style={{ fontSize: 13, color: T.accent, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <IconCheck size={13} />
                            Completed
                          </span>
                        ) : (
                          <button
                            onClick={() => markRead(section.key)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 8,
                              padding: '8px 18px',
                              background: T.accentDim,
                              border: `1px solid ${T.accentBorder}`,
                              borderRadius: 6,
                              color: T.accent,
                              fontSize: 13,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            <IconCheck size={13} />
                            Mark as read
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz — real or placeholder */}
          {activeQuiz ? (
            <QuizCard questions={activeQuiz} title={activeModule.title} />
          ) : (
            <div
              style={{
                background: T.card,
                border: `1px solid ${T.border}`,
                borderRadius: 12,
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                opacity: 0.45,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Quiz — coming soon</p>
                <p style={{ fontSize: 13, color: T.muted }}>
                  Test your knowledge on this module. Unlock after completing all sections.
                </p>
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: T.faint,
                  background: 'rgba(0,0,0,0.04)',
                  padding: '4px 10px',
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              >
                Locked
              </span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
