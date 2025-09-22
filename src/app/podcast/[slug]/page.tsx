import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllEpisodes, getEpisodeBySlug, formatDate, formatDuration, formatShowNotes } from '../../../../lib/podcast';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);

  if (!episode) {
    return {
      title: 'Episode Not Found - Grow with the Flo',
    };
  }

  return {
    title: `${episode.title} - Grow with the Flo Podcast`,
    description: episode.shortDescription,
    openGraph: {
      title: `${episode.title} - Grow with the Flo Podcast`,
      description: episode.shortDescription,
      type: 'website',
      images: [episode.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${episode.title} - Grow with the Flo Podcast`,
      description: episode.shortDescription,
      images: [episode.image],
    },
  };
}

// Generate static paths for all episodes
export async function generateStaticParams() {
  const episodes = await getAllEpisodes();
  
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

// This tells Next.js to revalidate this page every 6 hours
export const revalidate = 21600; // 6 hours in seconds

export default async function EpisodeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  // Generate JSON-LD schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name: episode.title,
    description: episode.description,
    datePublished: episode.pubDate,
    duration: episode.duration,
    audio: {
      '@type': 'AudioObject',
      contentUrl: episode.audioUrl,
    },
    image: episode.image,
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: 'Grow with the Flo',
      url: 'https://florianhohenleitner.com/podcast',
    },
    publisher: {
      '@type': 'Person',
      name: 'Florian Hohenleitner',
    },
  };



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-sand">
        <section className="section py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back to episodes link */}
            <div className="mb-8">
              <Link 
                href="/podcast"
                className="inline-flex items-center gap-2 text-brand hover:text-brand/80 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all episodes
              </Link>
            </div>

            {/* Episode Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Episode Image */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src={episode.image}
                      alt={episode.title}
                      width={200}
                      height={200}
                      className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Episode Info */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Episode Number & Date */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {episode.episodeNumber && (
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-brand/10 text-brand">
                          Episode {episode.episodeNumber}
                        </span>
                      )}
                      <span className="text-ink/60 text-xs sm:text-sm">
                        {formatDate(episode.pubDate)}
                      </span>
                      {episode.duration && (
                        <>
                          <span className="text-ink/40 hidden sm:inline">•</span>
                          <span className="text-ink/60 text-xs sm:text-sm">
                            {formatDuration(episode.duration)}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-ink mb-4">
                      {episode.title}
                    </h1>

                    {/* Platform Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      {episode.spotifyUrl && (
                        <a
                          href={episode.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#1DB954] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#1ed760] transition-colors font-medium text-sm"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                          Spotify
                        </a>
                      )}
                      {episode.appleUrl && (
                        <a
                          href={episode.appleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-black text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          Apple Podcasts
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-heading font-bold text-ink mb-3 sm:mb-4">
                  Listen Now
                </h2>
                <div className="w-full">
                  <audio
                    controls
                    preload="metadata"
                    className="w-full rounded-lg"
                    style={{ height: '40px' }}
                  >
                    <source src={episode.audioUrl} type="audio/mpeg" />
                    <p className="text-ink/60 text-sm">
                      Your browser doesn't support the audio element. 
                      <a 
                        href={episode.audioUrl} 
                        className="text-brand hover:text-brand/80 underline ml-1"
                        download
                      >
                        Download the episode
                      </a>
                    </p>
                  </audio>
                  
                  {/* Episode Info Below Audio */}
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-sand/50 rounded-lg">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-ink/60">
                      <span>
                        {episode.duration && `Duration: ${formatDuration(episode.duration)}`}
                      </span>
                      <a 
                        href={episode.audioUrl} 
                        className="text-brand hover:text-brand/80 underline"
                        download
                      >
                        Download Episode
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode Description / Show Notes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-heading font-bold text-ink mb-4 sm:mb-6">
                  Show Notes
                </h2>
                <div 
                  className="prose prose-sm sm:prose-lg max-w-none text-ink/80 leading-relaxed 
                             prose-headings:text-ink prose-strong:text-ink prose-em:text-ink/90
                             prose-p:text-ink/80 prose-li:text-ink/80 prose-ul:space-y-1"
                  dangerouslySetInnerHTML={{ __html: formatShowNotes(episode.description) }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
