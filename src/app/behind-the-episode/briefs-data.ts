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
    description: "A reflection on recording with Daniel Wang in Hội An — and on Sherry, the love that doesn't end.",
    episodeUrl: 'https://open.spotify.com/episode/6m8izN3cwkGhf43joVxEt5',
  },
  'daniel-wang-behind-episode': {
    title: 'Behind the Episode — There Was More Life in Those Five Years',
    description: 'He lost his wife. This is what came after. Daniel Wang on grief, love, addiction and finding your way back.',
    episodeUrl: 'https://www.youtube.com/watch?v=jIG0lskGV6s',
  },
  'vipassana-behind-episode': {
    title: 'Behind the Episode — Ten Days of Silence',
    description: 'What actually happens inside a 10-day Vipassana silent retreat — pain, impermanence, and what it means to finish the hardest thing you\'ve ever done.',
    episodeUrl: 'https://www.youtube.com/watch?v=sjPqiaOVWxQ&t=30s',
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
  primaryBriefSlug?: string; // if set, link directly to this brief page
  briefs: BriefTab[];
}

export const episodes: Episode[] = [
  {
    slug: 'danny-rahim',
    title: 'Danny Rahim — On Sobriety, Identity & ADHD',
    description: 'A deep, honest conversation with Danny about getting sober, what alcohol really does, and what comes after.',
    spotifyUrl: 'https://open.spotify.com/episode/3uGG5mCKcgCCx4ksDJTkss',
    youtubeUrl: 'https://www.youtube.com/watch?v=X08GuDSp2Kk&t=16s',
    primaryBriefSlug: 'danny-live-guide',
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
    podcastSlugs: ['episode-12-falling-in-love-with-my-life-again-reflections-from-hoi-an'],
    primaryBriefSlug: 'hoian-q1',
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
    primaryBriefSlug: 'anxiety-stuck-to-free',
    briefs: [
      { slug: 'anxiety-stuck-to-free', label: 'The Brief' },
    ],
  },
  {
    slug: 'daniel-wang',
    title: 'There Was More Life in Those Five Years | Daniel Wang on Love, Loss & Living Fully',
    description: 'A chance meeting on a plane became a conversation about love, loss, and the woman who lived more fully in five years than most do in a lifetime.',
    spotifyUrl: 'https://open.spotify.com/episode/6m8izN3cwkGhf43joVxEt5',
    youtubeUrl: 'https://www.youtube.com/watch?v=jIG0lskGV6s',
    podcastSlugs: ['episode-13-there-was-more-life-in-those-five-years-daniel-wang-on-love-loss-living-fully'],
    primaryBriefSlug: 'daniel-wang-behind-episode',
    briefs: [
      { slug: 'daniel-wang-behind-episode', label: 'Behind the Episode' },
      { slug: 'daniel-wang', label: 'Original Brief' },
    ],
  },
  {
    slug: 'vipassana',
    title: 'Ten Days of Silence — What Vipassana Actually Taught Me',
    description: 'A solo reflection on completing a 10-day Vipassana silent retreat in Vietnam — pain, impermanence, and what it means to finish the hardest thing you\'ve ever done.',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/growwiththeflo/episodes/Ten-Days-of-Silence--What-Vipassana-Actually-Taught-Me-e3lqajk',
    youtubeUrl: 'https://www.youtube.com/watch?v=sjPqiaOVWxQ&t=30s',
    podcastSlugs: ['episode-14-ten-days-of-silence-what-vipassana-actually-taught-me'],
    primaryBriefSlug: 'vipassana-behind-episode',
    briefs: [
      { slug: 'vipassana-behind-episode', label: 'Behind the Episode' },
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

export function getEpisodeBriefHref(ep: Episode): string {
  if (ep.primaryBriefSlug) return `/behind-the-episode/${ep.primaryBriefSlug}`;
  return `/behind-the-episode/episode/${ep.slug}`;
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
