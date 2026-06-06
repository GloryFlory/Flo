import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { episodes } from '../../briefs-data';
import { loadBriefHtml, LoadedBrief } from '../../load-brief';
import EpisodeTabs from './EpisodeTabs';

interface Props {
  params: Promise<{ episode: string }>;
}

export async function generateStaticParams() {
  return episodes.map((e) => ({ episode: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { episode: slug } = await params;
  const ep = episodes.find((e) => e.slug === slug);
  if (!ep) return {};
  return {
    title: ep.title,
    description: ep.description,
    openGraph: { title: ep.title, description: ep.description },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { episode: slug } = await params;
  const ep = episodes.find((e) => e.slug === slug);
  if (!ep) notFound();

  const loaded: LoadedBrief[] = (
    await Promise.all(ep.briefs.map((b) => loadBriefHtml(b.slug)))
  ).filter((b): b is LoadedBrief => b !== null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-accent/10 to-sand">
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <a
            href="/podcast"
            className="inline-block text-sm text-ink/60 hover:text-ink mb-6"
          >
            ← Back to podcast
          </a>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-ink">
            {ep.title}
          </h1>
          <p className="text-base sm:text-lg text-ink/70 leading-relaxed mb-6">
            {ep.description}
          </p>

          {/* Listen buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {ep.spotifyUrl && (
              <a
                href={ep.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1DB954] text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow hover:opacity-90 transition"
              >
                Listen on Spotify
              </a>
            )}
            {ep.youtubeUrl && (
              <a
                href={ep.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF0000] text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow hover:opacity-90 transition"
              >
                Watch on YouTube
              </a>
            )}
          </div>

          {/* Tabs + brief content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <EpisodeTabs tabs={ep.briefs} briefs={loaded} />
          </div>
        </div>
      </section>
    </main>
  );
}
