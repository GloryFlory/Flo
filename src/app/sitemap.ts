import { getAllEpisodes } from '../../lib/podcast';

export default async function sitemap() {
  const baseUrl = 'https://florianhohenleitner.com';
  
  // Get all episodes for dynamic sitemap generation
  const episodes = await getAllEpisodes();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/coaching`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Dynamic episode pages
  const episodePages = episodes.map((episode) => ({
    url: `${baseUrl}/podcast/${episode.slug}`,
    lastModified: new Date(episode.pubDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...episodePages];
}
