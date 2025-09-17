import Link from 'next/link';
import Image from 'next/image';
import { PodcastEpisode, formatDate, formatDuration } from '../lib/podcast';

interface PodcastEpisodeCardProps {
  episode: PodcastEpisode;
  isFeatured?: boolean;
}

export default function PodcastEpisodeCard({ episode, isFeatured = false }: PodcastEpisodeCardProps) {
  const cardClasses = isFeatured 
    ? "bg-gradient-to-br from-brand/10 via-white to-accent/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-brand/30 ring-2 ring-brand/20"
    : "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300";

  const imageSize = isFeatured ? "w-32 h-32 sm:w-40 sm:h-40" : "w-24 h-24 sm:w-32 sm:h-32";
  const titleClasses = isFeatured 
    ? "text-xl sm:text-2xl font-heading font-bold text-ink mb-3"
    : "text-lg sm:text-xl font-heading font-semibold text-ink mb-3";

  return (
    <div className={cardClasses}>
      <Link href={`/podcast/${episode.slug}`} className="block">
        <div className="p-6 sm:p-8">
          <div className="flex gap-6">
            {/* Episode Image */}
            <div className={`flex-shrink-0 ${imageSize} rounded-lg overflow-hidden shadow-md`}>
              <Image
                src={episode.image}
                alt={episode.title}
                width={isFeatured ? 160 : 128}
                height={isFeatured ? 160 : 128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Episode Content */}
            <div className="flex-1 min-w-0">
              {/* Episode Number & Date */}
              <div className="flex items-center gap-3 mb-3">
                {episode.episodeNumber && (
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    isFeatured ? 'bg-brand text-white' : 'bg-brand/10 text-brand'
                  }`}>
                    Episode {episode.episodeNumber}
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

              {/* Title */}
              <h3 className={titleClasses}>
                {episode.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-ink/70 mb-6 line-clamp-3 leading-relaxed">
                {episode.shortDescription}
              </p>

              {/* Listen Now Button */}
              <div className="flex items-center justify-between">
                <div className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  isFeatured 
                    ? 'bg-brand text-white shadow-md' 
                    : 'bg-brand/10 text-brand hover:bg-brand/20'
                }`}>
                  Listen Now
                </div>

                {isFeatured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-accent text-white shadow-sm">
                    Latest Episode
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
