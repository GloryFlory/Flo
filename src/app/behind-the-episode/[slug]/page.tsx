import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { briefRegistry } from '../briefs-data';
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

  return (
    <div className="brief-page" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: scopedStyles }} />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      <BriefScrollBar />
    </div>
  );
}
