import Link from 'next/link';
import Image from 'next/image';
import { PodcastEpisode, formatDate, formatDuration } from '../lib/podcast';
import { findEpisodeForPodcast } from '../src/app/behind-the-episode/briefs-data';

interface PodcastEpisodeCardProps {
  episode: PodcastEpisode;
  isFeatured?: boolean;
  locale?: string;
}

export default function PodcastEpisodeCard({ episode, isFeatured = false, locale = 'en' }: PodcastEpisodeCardProps) {
  const cardClasses = isFeatured 
    ? "bg-gradient-to-br from-brand/10 via-white to-accent/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-brand/30 ring-2 ring-brand/20"
    : "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300";

  const imageSize = isFeatured ? "w-32 h-32 sm:w-40 sm:h-40" : "w-24 h-24 sm:w-32 sm:h-32";
  const titleClasses = isFeatured 
    ? "text-xl sm:text-2xl font-heading font-bold text-ink mb-3"
    : "text-lg sm:text-xl font-heading font-semibold text-ink mb-3";

  // Translation helper
  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        listenNow: 'Listen Now',
        latestEpisode: 'Latest Episode'
      },
      de: {
        listenNow: 'Jetzt anhören',
        latestEpisode: 'Neueste Episode'
      }
    };
    return translations[locale]?.[key] || translations.en[key] || key;
  };

  const episodeUrl = locale === 'de' ? `/de/podcast/${episode.slug}` : `/podcast/${episode.slug}`;
  const briefEpisode = findEpisodeForPodcast({ slug: episode.slug, spotifyUrl: episode.spotifyUrl });

  return (
    <div className={cardClasses}>
      <div className="p-6 sm:p-8">
        <div className="flex gap-6">
          {/* Episode Image */}
          <Link href={episodeUrl} className={`flex-shrink-0 ${imageSize} rounded-lg overflow-hidden shadow-md block`}>
            <Image
              src={episode.image}
              alt={episode.title}
              width={isFeatured ? 160 : 128}
              height={isFeatured ? 160 : 128}
              className="w-full h-full object-cover"
            />
          </Link>

          {/* Episode Content */}
          <div className="flex-1 min-w-0">
            <Link href={episodeUrl} className="block group">
              {/* Episode Number & Date - Mobile Optimized */}
              <div className="mb-3">
                {/* Desktop: Show episode number inline with date */}
                <div className="hidden sm:flex items-center gap-3">
                  {episode.episodeNumber && !isFeatured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand/10 text-brand">
                      {episode.seasonNumber ? `S${episode.seasonNumber} · E${episode.episodeNumber}` : `Episode ${episode.episodeNumber}`}
                    </span>
                  )}
                  <span className="text-sm text-ink/60">
                    {formatDate(episode.pubDate)}
                  </span>
                  {episode.duration && (
                    <>
                      <span className="text-ink/40">•</span>
                      <span className="text-sm text-ink/60">
                        {formatDuration(episode.duration)}
                      </span>
                    </>
                  )}
                </div>

                {/* Mobile: Simplified date and duration only */}
                <div className="flex sm:hidden items-center gap-2 text-sm text-ink/60">
                  <span>{formatDate(episode.pubDate)}</span>
                  {episode.duration && (
                    <>
                      <span className="text-ink/40">•</span>
                      <span>{formatDuration(episode.duration)}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className={titleClasses}>
                {episode.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-ink/70 mb-6 line-clamp-3 leading-relaxed">
                {episode.shortDescription}
              </p>
            </Link>

            {/* Action row */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <Link
                  href={episodeUrl}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    isFeatured
                      ? 'bg-brand text-white shadow-md hover:bg-brand/90'
                      : 'bg-brand/10 text-brand hover:bg-brand/20'
                  }`}
                >
                  {t('listenNow')}
                </Link>

                {briefEpisode && (
                  <Link
                    href={`/behind-the-episode/episode/${briefEpisode.slug}`}
                    title={briefEpisode.briefs.length > 1 ? `${briefEpisode.briefs.length} briefs` : 'Behind the episode'}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-brand/20 text-brand/80 hover:bg-brand/5 hover:border-brand/40 hover:text-brand transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <span>Behind the Episode{briefEpisode.briefs.length > 1 ? ` · ${briefEpisode.briefs.length}` : ''}</span>
                  </Link>
                )}
              </div>

              {isFeatured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-accent text-white shadow-sm">
                  {t('latestEpisode')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
