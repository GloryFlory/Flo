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

  const scope = `.brief-page[data-brief="${slug}"]`;

  // Scope the most common global selectors used by imported HTML briefs.
  // This prevents first-tab styles from changing the whole page shell.
  let scopedStyles = styleBlocks
    .replace(/^(\s*):root(\s*\{)/gm, `$1${scope}$2`)
    .replace(/^(\s*)html(\s*\{)/gm, `$1${scope}$2`)
    .replace(/^(\s*)body(\s*\{)/gm, `$1${scope}$2`)
    .replace(/^(\s*)body(::after\s*\{)/gm, `$1${scope}$2`)
    .replace(/^(\s*)\*\s*,\s*\*::before\s*,\s*\*::after(\s*\{)/gm, `$1${scope} *, ${scope} *::before, ${scope} *::after$2`)
    .replace(/^(\s*)\*(\s*\{)/gm, `$1${scope} *$2`);

  // Prefix normal selector blocks with the brief scope. Keep @rules and
  // keyframe steps (from/to/NN%) untouched.
  scopedStyles = scopedStyles.replace(/^([^@\n][^{}]*?)\{/gm, (full, selectorGroup: string) => {
    const trimmed = selectorGroup.trim();
    if (!trimmed) return full;

    const selectors = trimmed.split(',').map((s) => s.trim());
    const scoped = selectors.map((sel) => {
      if (!sel) return sel;
      if (sel.startsWith(scope)) return sel;
      if (sel === 'from' || sel === 'to' || /^\d+%$/.test(sel)) return sel;
      return `${scope} ${sel}`;
    });

    return `${scoped.join(', ')} {`;
  });

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = (bodyMatch ? bodyMatch[1] : '')
    .replace(/<script[\s\S]*?<\/script>/gi, '');

  return { slug, scopedStyles, bodyContent };
}
