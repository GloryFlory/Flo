import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { briefRegistry, episodes } from '../briefs-data';
import BriefScrollBar from './BriefScrollBar';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(briefRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = briefRegistry[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function BriefPage({ params }: Props) {
  const { slug } = await params;
  if (!briefRegistry[slug]) notFound();

  const htmlPath = path.join(process.cwd(), 'public', 'briefs', `${slug}.html`);
  let html: string;
  try {
    html = await fs.readFile(htmlPath, 'utf8');
  } catch {
    notFound();
  }

  // Find which episode this brief belongs to (for multi-brief nav)
  const episode = episodes.find((ep) => ep.briefs.some((b) => b.slug === slug));

  // Extract all <style> blocks
  const styleBlocks = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((m) => m[1])
    .join('\n');

  // Scope body-level rules to .brief-page so they don't bleed into the site layout
  const scopedStyles = styleBlocks
    .replace(/^(\s*)body(\s*\{)/gm, '$1.brief-page$2')
    .replace(/^(\s*)body(::after\s*\{)/gm, '$1.brief-page$2');

  // Extract <body> content, strip inline <script> (handled by BriefScrollBar)
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = (bodyMatch ? bodyMatch[1] : '')
    .replace(/<script[\s\S]*?<\/script>/gi, '');

  const hasMultipleBriefs = episode && episode.briefs.length > 1;

  return (
    <>
      {/* Dark nav bar — sits between site header and brief hero, outside .brief-page to avoid brief CSS */}
      <div
        id="brief-topnav"
        style={{
          background: '#1C1A16',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          height: '44px',
          gap: '16px',
        }}
      >
        {/* Back to podcast */}
        <a
          href="/podcast"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.45)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" />
          </svg>
          Podcast
        </a>

        {/* Brief tabs for multi-brief episodes */}
        {hasMultipleBriefs && (
          <>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', gap: '4px' }}>
              {episode.briefs.map((b) => (
                <a
                  key={b.slug}
                  href={`/behind-the-episode/${b.slug}`}
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    color: b.slug === slug ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    background: b.slug === slug ? 'rgba(255,255,255,0.1)' : 'transparent',
                    textDecoration: 'none',
                    border: b.slug === slug ? '1px solid rgba(255,255,255,0.15)' : '1px solid transparent',
                  }}
                >
                  {b.label}
                </a>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="brief-page" style={{ position: 'relative', minHeight: '100vh' }}>
        {/* eslint-disable-next-line react/no-danger */}
        <style dangerouslySetInnerHTML={{ __html: scopedStyles }} />
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
        <BriefScrollBar />
      </div>
    </>
  );
}
