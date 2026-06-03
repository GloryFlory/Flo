import fs from 'fs/promises';
import path from 'path';

export interface LoadedBrief {
  slug: string;
  scopedStyles: string;
  bodyContent: string;
}

export async function loadBriefHtml(slug: string): Promise<LoadedBrief | null> {
  const htmlPath = path.join(process.cwd(), 'public', 'briefs', `${slug}.html`);
  let html: string;
  try {
    html = await fs.readFile(htmlPath, 'utf8');
  } catch {
    return null;
  }

  const styleBlocks = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((m) => m[1])
    .join('\n');

  // Scope body-level rules to .brief-page so they don't bleed into the site layout
  const scopedStyles = styleBlocks
    .replace(/^(\s*)body(\s*\{)/gm, `$1.brief-page[data-brief="${slug}"]$2`)
    .replace(/^(\s*)body(::after\s*\{)/gm, `$1.brief-page[data-brief="${slug}"]$2`);

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = (bodyMatch ? bodyMatch[1] : '')
    .replace(/<script[\s\S]*?<\/script>/gi, '');

  return { slug, scopedStyles, bodyContent };
}
