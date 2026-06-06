export interface BriefMeta {
  title: string;
  description: string;
  episodeUrl?: string;
}

export const briefRegistry: Record<string, BriefMeta> = {
  'hoian-q1': {
    title: 'Behind the Episode — The Hội An Chapter',
    description: 'Four months in — what I found, what I built, and what I\'m still figuring out. Q1 reflection, the routine that helped, the performance trap, and three poems.',
    episodeUrl: 'https://open.spotify.com/episode/5Kd0gEXtM2uVZo7dLhlr86',
  },
  'anxiety-stuck-to-free': {
    title: 'Behind the Episode — From Stuck to Free',
    description: 'My journey with anxiety — what it took, what helped, and where I am now. A solo vulnerability episode.',
    episodeUrl: 'https://open.spotify.com/episode/1NsYf3o8fkfpHy4yOnCCW3',
  },
  'danny-live-guide': {
    title: 'Behind the Episode — Danny Rahim: Live Guide',
    description: 'The live guide for the Danny Rahim episode. Conversation flow, key topics, and what to draw out.',
    episodeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
  },
  'danny-alcohol-stats': {
    title: 'Behind the Episode — Alcohol: The Numbers',
    description: 'Key statistics on alcohol, mental health, the UK economy, and the ADHD connection — context for the Danny Rahim episode.',
    episodeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
  },
  'danny-stats': {
    title: 'Behind the Episode — The Numbers Behind the Story',
    description: 'Stats to ground the Danny Rahim conversation — not to lecture with. Use them as context, not content.',
    episodeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
  },
  'daniel-wang': {
    title: 'Behind the Episode — Daniel Wang',
    description: 'A reflection on recording with Daniel Wang in Hội An — and on Sherry, the love that doesn’t end.',
    episodeUrl: 'https://open.spotify.com/episode/6m8izN3cwkGhf43joVxEt5',
  },
};

// Episode model — groups one or more briefs under a single podcast episode
export interface BriefTab {
  slug: string;       // matches a key in briefRegistry
  label: string;
}

export interface Episode {
  slug: string;       // url segment
  title: string;
  description: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  podcastSlugs?: string[]; // slugs from the RSS feed (e.g. 'episode-10-...')
  briefs: BriefTab[];
}

export const episodes: Episode[] = [
  {
    slug: 'danny-rahim',
    title: 'Danny Rahim — On Sobriety, Identity & ADHD',
    description: 'A deep, honest conversation with Danny about getting sober, what alcohol really does, and what comes after.',
    spotifyUrl: 'https://open.spotify.com/episode/3uGG5mCKcgCCx4ksDJTkss',
    youtubeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
    podcastSlugs: [
      'episode-11-the-person-youre-still-becoming-danny-rahim-on-purpose-growth-sobriety',
    ],
    briefs: [
      { slug: 'danny-live-guide', label: 'Live Guide' },
      { slug: 'danny-alcohol-stats', label: 'Alcohol — The Numbers' },
      { slug: 'danny-stats', label: 'The Numbers Behind the Story' },
    ],
  },
  {
    slug: 'hoi-an',
    title: 'The Hội An Chapter — Four Months In',
    description: 'A solo reflection from Vietnam. What I found, what I built, the routine that helped, the performance trap, and three poems.',
    spotifyUrl: 'https://open.spotify.com/episode/5Kd0gEXtM2uVZo7dLhlr86',
    briefs: [
      { slug: 'hoian-q1', label: 'The Brief' },
    ],
  },
  {
    slug: 'anxiety',
    title: 'From Stuck to Free — My Journey with Anxiety',
    description: 'A solo vulnerability episode. What anxiety took from me, what helped, and where I am now.',
    spotifyUrl: 'https://open.spotify.com/episode/1NsYf3o8fkfpHy4yOnCCW3',
    youtubeUrl: 'https://www.youtube.com/watch?v=qiZzu9mosdA',
    podcastSlugs: ['episode-10-how-i-overcame-toilet-anxiety-and-reclaimed-my-freedom'],
    briefs: [
      { slug: 'anxiety-stuck-to-free', label: 'The Brief' },
    ],
  },
  {
    slug: 'daniel-wang',
    title: 'Daniel Wang — There Was More Life in Those Five Years',
    description: 'A chance meeting on a plane became a conversation about love, loss, and the woman who lived more fully in five years than most do in a lifetime.',
    spotifyUrl: 'https://open.spotify.com/episode/6m8izN3cwkGhf43joVxEt5',
    briefs: [
      { slug: 'daniel-wang', label: 'The Brief' },
    ],
  },
];

// Find a behind-the-episode page by the podcast's Spotify URL.
// Matches by the Spotify episode ID so tracking params (?si=...) don't break it.
function extractSpotifyId(url?: string | null): string | null {
  if (!url) return null;
  const m = url.match(/episode\/([A-Za-z0-9]+)/);
  return m ? m[1] : null;
}

export function findEpisodeBySpotifyUrl(spotifyUrl?: string | null): Episode | undefined {
  const id = extractSpotifyId(spotifyUrl);
  if (!id) return undefined;
  return episodes.find((ep) => extractSpotifyId(ep.spotifyUrl) === id);
}

// Match a podcast episode (from the RSS feed) to a brief episode.
// Tries Spotify ID first, then falls back to the podcast slug list.
export function findEpisodeForPodcast(podcast: { slug?: string; spotifyUrl?: string }): Episode | undefined {
  const byId = findEpisodeBySpotifyUrl(podcast.spotifyUrl);
  if (byId) return byId;
  if (podcast.slug) {
    return episodes.find((ep) => ep.podcastSlugs?.includes(podcast.slug!));
  }
  return undefined;
}

// Human-readable display list (kept for the individual-brief flow)
export const briefList = [
  {
    slug: 'hoian-q1',
    title: 'The Hội An Chapter',
    description: 'Four months in — what I found, what I built, and what I\'m still figuring out.',
    episodeUrl: 'https://open.spotify.com/episode/5Kd0gEXtM2uVZo7dLhlr86',
  },
  {
    slug: 'anxiety-stuck-to-free',
    title: 'From Stuck to Free',
    description: 'My journey with anxiety — what it took, what helped, and where I am now.',
    episodeUrl: 'https://open.spotify.com/episode/1NsYf3o8fkfpHy4yOnCCW3',
  },
  {
    slug: 'danny-live-guide',
    title: 'Danny Rahim — Live Guide',
    description: 'The live guide for the Danny Rahim episode.',
    episodeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
  },
  {
    slug: 'danny-alcohol-stats',
    title: 'Alcohol — The Numbers (Danny Rahim)',
    description: 'Key statistics on alcohol, mental health, and the ADHD connection.',
    episodeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
  },
  {
    slug: 'danny-stats',
    title: 'The Numbers Behind the Story (Danny Rahim)',
    description: 'Stats to ground the Danny Rahim conversation — not to lecture with.',
    episodeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
  },
];
