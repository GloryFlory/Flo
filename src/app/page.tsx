import MailingListForm from '../components/MailingListForm';
import HeroContent from '../components/HeroContent';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedOnLoad from '../components/AnimatedOnLoad';
import ParallaxHero from '../components/ParallaxHero';

export default function HomePage() {
  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://florianhohenleitner.com/#person',
        name: 'Florian Hohenleitner',
        jobTitle: 'Podcast Host & Retreat Organiser',
        description: 'Host of the Grow with the Flo podcast. Former compliance director turned nomad, sharing honest conversations about growth, identity, and connection.',
        url: 'https://florianhohenleitner.com',
        image: 'https://florianhohenleitner.com/profile.jpeg',
        sameAs: [
          'https://open.spotify.com/show/3vRG8eplIkpnBBAUPpih2N',
          'https://podcasts.apple.com/us/podcast/grow-with-the-flo/id1795716394',
        ],
        knowsAbout: [
          'Life Coaching',
          'Personal Development',
          'Mental Health',
          'Anxiety Management',
          'Authentic Living',
          'Mindfulness',
          'Personal Growth'
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://florianhohenleitner.com/#website',
        url: 'https://florianhohenleitner.com',
        name: 'Florian Hohenleitner — Podcast, Retreats & Honest Conversations About Growth',
        description: 'I quit a well-paying job and have been rebuilding from scratch ever since. This is where I share the process.',
        publisher: {
          '@id': 'https://florianhohenleitner.com/#person'
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://florianhohenleitner.com/podcast?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        ]
      },
      {
        '@type': 'PodcastSeries',
        '@id': 'https://florianhohenleitner.com/podcast/#podcast',
        name: 'Grow with the Flo',
        description: 'Open, honest, and real conversations about life. Hosted by Flo, this podcast explores what it truly means to grow, connect, and learn in a world that often prioritizes filters over authenticity.',
        url: 'https://florianhohenleitner.com/podcast',
        image: 'https://florianhohenleitner.com/podcast-logo.png',
        author: {
          '@id': 'https://florianhohenleitner.com/#person'
        },
        publisher: {
          '@id': 'https://florianhohenleitner.com/#person'
        },
        genre: ['Personal Development', 'Mental Health', 'Self-Help'],
        webFeed: 'https://anchor.fm/s/100089160/podcast/rss'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
      {/* Hero section */}
      <ParallaxHero>
        <HeroContent />
      </ParallaxHero>

      {/* About card overlapping hero - moved outside hero section */}
      <div className="relative z-50 w-full flex justify-center -mt-24 sm:-mt-32 lg:-mt-48 px-4">
        <AnimatedOnLoad className="bg-white rounded-xl shadow-lg px-6 sm:px-10 py-6 sm:py-8 lg:py-10 max-w-3xl w-full" delay={1.0}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6 text-center">
            I'm Flo
          </h2>
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 w-full sm:w-40 lg:w-48">
              <img
                src="/profile.jpeg"
                alt="Florian"
                className="w-full aspect-square rounded-lg object-cover border-4 border-brand shadow-lg"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed font-medium">
                Former compliance director. Yoga teacher. Podcast host. Retreat organiser. Nomad.
              </p>
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                I left a career that looked good from the outside, lost my identity with it, and spent the years since travelling, training, building, failing — and slowly falling back in love with myself.
              </p>
              <p className="text-ink/70 text-sm sm:text-base mb-4 leading-relaxed italic">
                Honest conversations about growth, connection, and figuring it out as you go.
              </p>
              <a
                href="/about"
                className="inline-block bg-brand text-white font-bold rounded px-4 sm:px-6 py-2 text-sm sm:text-base shadow hover:bg-brand/90 transition"
              >
                Read my story <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </AnimatedOnLoad>
      </div>

      {/* Work / Build section */}
      <section className="section py-16 sm:py-20 bg-sand">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-brand mb-4">
                Web, Booking & Tools
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-5 text-ink leading-tight">
                I also build for<br className="hidden sm:block" /> retreat organizers.
              </h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                Websites, event scheduling tools, custom booking flows. One person — design, code, and copy — so nothing gets lost between three different freelancers.
              </p>
              <p className="text-ink/70 leading-relaxed mb-8">
                I organize events myself. I know what breaks at 11pm before day one.
              </p>
              <p className="text-ink/50 text-sm mb-6">
                Every project is scoped individually.
              </p>
              <a
                href="mailto:hello@florianhohenleitner.com"
                className="inline-block bg-brand text-white font-bold rounded px-6 py-3 text-sm shadow hover:bg-brand/90 transition"
              >
                Get a quote <span className="arrow">&rarr;</span>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Retreat Website', note: 'Design, build, copy, schedule — all in' },
                { label: 'Booking & Launch Setup', note: 'Ticketing, email sequences, schedule' },
                { label: 'Custom Tools', note: 'Intakes, portals, dashboards' },
              ].map((item) => (
                <a
                  key={item.label}
                  href="/work"
                  className="bg-white border border-ink/8 rounded-lg p-4 hover:border-brand/30 hover:shadow-sm transition-all group"
                >
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-ink/40 mb-2">{item.label}</p>
                  <p className="text-sm text-ink/70 leading-snug group-hover:text-brand transition-colors">{item.note}</p>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Retreat Teaser Section */}
      <section className="section py-16 sm:py-20 bg-white">
        <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-ink">
            Something is coming.
          </h2>
          <p className="text-ink/80 text-base sm:text-lg leading-relaxed mb-4">
            I've spent years organising festivals, conventions, and gatherings — and I've been quietly building toward something more intentional. A connection retreat. Grounded in movement, breathwork, and the kind of space where real human connection actually happens.
          </p>
          <p className="text-ink/80 text-base sm:text-lg leading-relaxed mb-8">
            It's not ready yet. But if it sounds like your kind of thing, get on the list and you'll be the first to know.
          </p>
          <a
            href="/retreat"
            className="inline-block bg-brand text-white font-bold rounded px-6 sm:px-8 py-3 text-sm sm:text-base shadow hover:bg-brand/90 transition"
          >
            Stay in the loop <span className="arrow">&rarr;</span>
          </a>
        </AnimatedSection>
      </section>

      {/* Newsletter Section */}
      <section className="section py-16 sm:py-24 bg-sand">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 sm:mb-8 text-ink">
            Stay Connected
          </h2>
          <p className="text-lg sm:text-xl text-ink/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            New episodes, honest updates, and a heads-up when the retreat opens. No noise.
          </p>
          <MailingListForm />
        </AnimatedSection>
      </section>
    </main>
    </>
  );
}
