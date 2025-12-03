import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllEpisodes, getEpisodeBySlug, formatDate, formatDuration, formatShowNotes } from '../../../../../lib/podcast';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Translation helper function
const t = (key: string) => {
  const translations: Record<string, string> = {
    'backToPodcast': 'Zurück zu allen Episoden',
    'listenNow': 'Jetzt anhören',
    'downloadEpisode': 'Episode herunterladen',
    'showNotes': 'Shownotes',
    'moreEpisodes': 'Weitere Episoden',
    'viewAllEpisodes': 'Alle Episoden anzeigen',
    'episodeNotFound': 'Episode nicht gefunden',
    'browserNotSupported': 'Ihr Browser unterstützt das Audio-Element nicht.'
  };
  
  return translations[key] || key;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);

  if (!episode) {
    return {
      title: 'Episode nicht gefunden - Grow with the Flo',
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

  const allEpisodes = await getAllEpisodes();
  const otherEpisodes = allEpisodes.filter(ep => ep.slug !== slug).slice(0, 3);

  return (
    <>
      <main className="min-h-screen bg-sand">
        <section className="section py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back to episodes link */}
            <div className="mb-8">
              <Link 
                href="/de/podcast"
                className="inline-flex items-center gap-2 text-brand hover:text-brand/80 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('backToPodcast')}
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
                      width={160}
                      height={160}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover shadow-md"
                      priority
                    />
                  </div>

                  {/* Episode Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-3">
                      <span className="text-sm text-ink/60">
                        {formatDate(episode.pubDate)}
                      </span>
                      {episode.duration && (
                        <>
                          <span className="text-ink/40 mx-2">•</span>
                          <span className="text-sm text-ink/60">
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
                    <div className="flex gap-3">
                      {episode.spotifyUrl && (
                        <a
                          href={episode.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-white border-2 border-gray-200 p-3 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                          title="Auf Spotify anhören"
                        >
                          <img src="/spotify-icon.png" alt="Spotify" className="w-6 h-6" />
                        </a>
                      )}
                      {episode.appleUrl && (
                        <a
                          href={episode.appleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-white border-2 border-gray-200 p-3 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                          title="Auf Apple Podcasts anhören"
                        >
                          <img src="/apple-icon.png" alt="Apple Podcasts" className="w-6 h-6" />
                        </a>
                      )}
                      <a
                        href="https://www.youtube.com/@GrowWithTheFloPodcast"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-white border-2 border-gray-200 p-3 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                        title="Auf YouTube ansehen"
                      >
                        <img src="/youtube-black.png" alt="YouTube" className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8">
              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-heading font-bold text-ink mb-3 sm:mb-4">
                  {t('listenNow')}
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
                      {t('browserNotSupported')}
                      <a 
                        href={episode.audioUrl} 
                        className="text-brand hover:text-brand/80 underline ml-1"
                        download
                      >
                        {t('downloadEpisode')}
                      </a>
                    </p>
                  </audio>
                </div>
              </div>
            </div>

            {/* Episode Description / Show Notes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-heading font-bold text-ink mb-4 sm:mb-6">
                  {t('showNotes')}
                </h2>
                
                {/* German Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 text-sm">
                    📝 <strong>Hinweis:</strong> Die Shownotes sind derzeit nur auf Englisch verfügbar.
                  </p>
                </div>
                
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

        {/* More Episodes */}
        {otherEpisodes.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-ink">{t('moreEpisodes')}</h2>
                <Link 
                  href="/de/podcast" 
                  className="text-brand hover:text-brand/80 font-medium"
                >
                  {t('viewAllEpisodes')} →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherEpisodes.map((ep) => (
                  <Link 
                    key={ep.slug} 
                    href={`/de/podcast/${ep.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={ep.image}
                          alt={ep.title}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-ink group-hover:text-brand transition-colors mb-2 line-clamp-2">
                          {ep.title}
                        </h3>
                        <p className="text-ink/60 text-sm mb-3">
                          {formatDate(ep.pubDate)} • {formatDuration(ep.duration)}
                        </p>
                        <p className="text-ink/70 text-sm line-clamp-3">
                          {ep.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
