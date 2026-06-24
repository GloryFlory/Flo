import { Metadata } from 'next';
import { episodes, getEpisodeBriefHref } from './briefs-data';

export const metadata: Metadata = {
  title: 'Behind the Episode',
  description: 'Before every episode, I write a brief — the arc, the honest notes, the things I want to remember to say. Here they are. Consider it the director\'s cut.',
};

export default function BehindTheEpisodePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-accent/10 to-sand">
      <section className="section py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-ink">
            Behind the Episode
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-ink/70 leading-relaxed mb-12">
            Before every episode, I write a brief — the arc, the honest notes, the things I want to remember to say. Here they are. Consider it the director&apos;s cut.
          </p>

          {episodes.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 text-center">
              <p className="text-ink/60 text-base sm:text-lg">
                Briefs are on their way. Check back soon.
              </p>
              <a
                href="/podcast"
                className="inline-block mt-6 bg-brand text-white font-bold rounded px-6 py-2.5 text-sm shadow hover:bg-brand/90 transition"
              >
                Listen to the podcast <span className="arrow">&rarr;</span>
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {episodes.map((ep) => (
                <div
                  key={ep.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                >
                  <h2 className="text-xl font-heading font-bold text-ink mb-1">
                    {ep.title}
                  </h2>
                  <p className="text-ink/60 text-sm leading-relaxed mb-4">
                    {ep.description}
                  </p>
                  {ep.briefs.length > 1 && (
                    <p className="text-xs text-ink/40 mb-4">
                      {ep.briefs.length} briefs · {ep.briefs.map((b) => b.label).join(' · ')}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={getEpisodeBriefHref(ep)}
                      className="inline-block bg-brand text-white font-bold rounded px-5 py-2 text-sm shadow hover:bg-brand/90 transition"
                    >
                      Read brief{ep.briefs.length > 1 ? 's' : ''}
                    </a>
                    {ep.spotifyUrl && (
                      <a
                        href={ep.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-brand text-brand font-bold rounded px-5 py-2 text-sm hover:bg-brand/5 transition"
                      >
                        Spotify
                      </a>
                    )}
                    {ep.youtubeUrl && (
                      <a
                        href={ep.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-ink/20 text-ink/70 font-bold rounded px-5 py-2 text-sm hover:bg-ink/5 transition"
                      >
                        YouTube
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
