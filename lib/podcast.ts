import Parser from 'rss-parser';

export interface PodcastEpisode {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  pubDate: string;
  audioUrl: string;
  image: string;
  episodeNumber?: number;
  duration?: string;
  spotifyUrl?: string;
  appleUrl?: string;
  guid: string;
}

const parser = new Parser({
  customFields: {
    item: [
      ['itunes:episode', 'episodeNumber'],
      ['itunes:duration', 'duration'],
      ['itunes:image', 'itunesImage'],
      ['itunes:summary', 'summary'],
    ]
  }
});

const RSS_URL = 'https://anchor.fm/s/100089160/podcast/rss';
const APPLE_PODCAST_BASE = 'https://podcasts.apple.com/us/podcast/grow-with-the-flo/id1795716394';
const SPOTIFY_SHOW_BASE = 'https://podcasters.spotify.com/pod/show/growwiththeflo';

function createSlug(title: string, episodeNumber?: number): string {
  const cleanTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  if (episodeNumber) {
    return `episode-${episodeNumber}-${cleanTitle}`;
  }
  
  return cleanTitle;
}

function extractEpisodeNumber(title: string): number | undefined {
  const match = title.match(/episode\s*(\d+)/i);
  return match ? parseInt(match[1], 10) : undefined;
}

function createShortDescription(description: string, maxLength: number = 150): string {
  const cleanDesc = description.replace(/<[^>]*>/g, '').trim();
  if (cleanDesc.length <= maxLength) return cleanDesc;
  
  const truncated = cleanDesc.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

function extractSpotifyUrl(link: string): string {
  // If the link is already a Spotify URL, return it
  if (link.includes('spotify.com') || link.includes('podcasters.spotify.com')) {
    return link;
  }
  
  // Otherwise, return the show URL
  return SPOTIFY_SHOW_BASE;
}

export async function getAllEpisodes(): Promise<PodcastEpisode[]> {
  try {
    const feed = await parser.parseURL(RSS_URL);
    
    return feed.items.map((item: any) => {
      const episodeNumber = item.episodeNumber || extractEpisodeNumber(item.title || '');
      const description = item.contentSnippet || item.content || item.summary || '';
      const audioUrl = item.enclosure?.url || item.link || '';
      const image = item.itunesImage?.href || 
                   item.itunes?.image || 
                   feed.image?.url || 
                   'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42855288/42855288-1755784487029-9d8f60e49ea79.jpg';

      return {
        slug: createSlug(item.title || '', episodeNumber),
        title: item.title || '',
        description: description,
        shortDescription: createShortDescription(description),
        pubDate: item.pubDate || '',
        audioUrl: audioUrl,
        image: image,
        episodeNumber: episodeNumber,
        duration: item.duration,
        spotifyUrl: extractSpotifyUrl(item.link || ''),
        appleUrl: APPLE_PODCAST_BASE,
        guid: item.guid || item.link || '',
      };
    }).sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    return [];
  }
}

export async function getEpisodeBySlug(slug: string): Promise<PodcastEpisode | null> {
  const episodes = await getAllEpisodes();
  return episodes.find(episode => episode.slug === slug) || null;
}

export function getAllEpisodeSlugs(episodes: PodcastEpisode[]): string[] {
  return episodes.map(episode => episode.slug);
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return '';
  }
}

export function formatDuration(duration?: string): string {
  if (!duration) return '';
  
  // Handle different duration formats
  if (duration.includes(':')) {
    return duration; // Already formatted as HH:MM:SS or MM:SS
  }
  
  // Convert seconds to MM:SS
  const seconds = parseInt(duration, 10);
  if (isNaN(seconds)) return '';
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
