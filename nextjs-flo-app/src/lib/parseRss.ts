import Parser from 'rss-parser';


export interface PodcastEpisode {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  enclosure?: { url: string };
  image?: string;
}

export async function fetchPodcastEpisodes(rssUrl: string): Promise<PodcastEpisode[]> {
  const parser = new Parser({
    customFields: {
      item: [
        ['itunes:image', 'itunesImage'],
        'image',
      ],
    },
  });
  const feed = await parser.parseURL(rssUrl);
  if (typeof window !== 'undefined' && feed.items && feed.items.length > 0) {
    // Log the raw data for the first episode
    console.log('Raw RSS item data:', feed.items[0]);
  }
  // Get podcast-level image as fallback
  const podcastImage = (feed.itunesImage?.href || feed.image?.url || feed.image || '');
  return feed.items.map(item => ({
    title: item.title || '',
    link: item.link || '',
    pubDate: item.pubDate || '',
    description: item.contentSnippet || '',
    enclosure: item.enclosure,
    image:
      item.itunesImage?.$?.href ||
      item.itunesImage?.href ||
      (item['itunes:image']?.href) ||
      item.image ||
      podcastImage ||
      '',
  }));
}
