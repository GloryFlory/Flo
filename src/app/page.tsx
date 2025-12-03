import EpisodeCard from '../components/EpisodeCard';
import MailingListForm from '../components/MailingListForm';

const episodes = [
  {
    title: 'Finding Your Flow',
    blurb: 'Discover how to unlock your potential and live with purpose.',
    link: 'https://anchor.fm/s/100089160/podcast/rss',
  },
  {
    title: 'Mindset Matters',
    blurb: 'How to cultivate a growth mindset for lasting change.',
    link: 'https://anchor.fm/s/100089160/podcast/rss',
  },
  {
    title: 'Resilience & Recovery',
    blurb: 'Bounce back from setbacks and thrive in adversity.',
    link: 'https://anchor.fm/s/100089160/podcast/rss',
  },
  {
    title: 'Coaching for Creatives',
    blurb: 'Tools and stories for creative professionals.',
    link: 'https://anchor.fm/s/100089160/podcast/rss',
  },
];

export default function HomePage() {
  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://florianhohenleitner.com/#person',
        name: 'Florian Hohenleitner',
        jobTitle: 'Life Coach & Podcast Host',
        description: 'Life coach and host of the Grow with the Flo podcast, helping people live authentically and grow meaningfully.',
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
        name: 'Florian Hohenleitner - Life Coach & Podcast Host',
        description: 'Transform your life with authentic coaching and real conversations on the Grow with the Flo podcast.',
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
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black/80 overflow-hidden py-16 sm:py-20 px-4">
        <img
          src="/header.jpg"
          alt="Header"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
          <div className="uppercase tracking-widest text-brand text-xs sm:text-sm lg:text-lg mb-4 font-bold px-4 py-2 rounded-lg" 
               style={{ 
                 textShadow: '0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.15)',
                 backgroundColor: 'rgba(255,255,255,0.1)',
                 backdropFilter: 'blur(8px)',
                 border: '1px solid rgba(255,255,255,0.2)'
               }}>
            Coaching • Podcast • Creative Growth
          </div>
          <h1 className="text-white font-heading font-extrabold text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-none mb-6 drop-shadow-lg px-4">
            Florian Hohenleitner
          </h1>
          <a
            href="/podcast"
            className="bg-brand text-white font-bold rounded px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 shadow hover:bg-brand/90 transition mx-4"
          >
            Listen to Grow with the Flo
          </a>
          <div className="flex justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 lg:mb-20 px-4">
            <a
              href="https://www.youtube.com/@GrowWithTheFloPodcast"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
              className="hover:opacity-80"
            >
              <img src="/youtube.png" alt="YouTube" width={32} height={32} className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
            <a
              href="https://www.instagram.com/grow.with_the.flo/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <img src="/instagram.png" alt="Instagram" width={32} height={32} className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
          </div>
        </div>
      </section>

      {/* About card overlapping hero - moved outside hero section */}
      <div className="relative z-50 w-full flex justify-center -mt-24 sm:-mt-32 lg:-mt-48 px-4">
        <div className="bg-white rounded-xl shadow-lg px-6 sm:px-10 py-6 sm:py-8 lg:py-10 max-w-3xl w-full">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6 text-center">
            About Flo
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-shrink-0">
              <img
                src="/profile.jpeg"
                alt="Florian"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-lg object-cover border-4 border-brand shadow-lg mx-auto"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <ul className="list-disc pl-5 mb-3 sm:mb-4 text-ink text-sm sm:text-base lg:text-lg space-y-1">
                <li>Coach & Podcast Host</li>
                <li>Personal Growth Specialist</li>
                <li>Retreat Leader</li>
                <li>Creative Professional</li>
              </ul>
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Florian is a passionate coach and podcast host helping creatives
                and professionals unlock their flow, resilience, and purpose. He
                believes growth is best achieved together, and his work is
                dedicated to building connection and transformation for all.
              </p>
              <a
                href="/about"
                className="inline-block bg-brand text-white font-bold rounded px-4 sm:px-6 py-2 text-sm sm:text-base shadow hover:bg-brand/90 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="section py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center text-ink">
            Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Living with Ease */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-sm mx-auto h-full">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-brand/20 to-brand/40 flex items-center justify-center p-6 sm:p-8">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-xl">
                  <img
                    src="/anxiety.jpg"
                    alt="Living with Ease"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                  Living with Ease
                </h3>
                <p className="text-ink/80 mb-4 text-sm sm:text-base font-medium h-6">
                  Anxiety Program
                </p>
                <p className="text-ink/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed flex-1">
                  Transform your relationship with anxiety and discover tools for lasting peace and confidence.
                </p>
                <a
                  href="/programs/living-with-ease"
                  className="inline-block bg-brand text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Becoming the Authentic Man */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-sm mx-auto h-full">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center p-6 sm:p-8">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-xl">
                  <img
                    src="/authentic.jpg"
                    alt="Becoming the Authentic Man"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                  Becoming the Authentic Man
                </h3>
                <p className="text-ink/80 mb-4 text-sm sm:text-base font-medium h-6">
                  Men's Development Program
                </p>
                <p className="text-ink/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed flex-1">
                  A journey of self-discovery to embrace your true masculinity and live with purpose and integrity.
                </p>
                <a
                  href="/programs/authentic-man"
                  className="inline-block bg-brand text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Connection & Relationships */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-sm mx-auto h-full">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-[#6b7a40]/20 to-[#6b7a40]/40 flex items-center justify-center p-6 sm:p-8">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-xl">
                  <img
                    src="/connection.jpg"
                    alt="Connection & Relationships"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                  Connection & Relationships
                </h3>
                <p className="text-ink/80 mb-4 text-sm sm:text-base font-medium h-6">
                  Relationship Coaching
                </p>
                <p className="text-ink/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed flex-1">
                  Build deeper, more meaningful connections and transform your relationships with others and yourself.
                </p>
                <a
                  href="/programs/connection-relationships"
                  className="inline-block bg-brand text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section py-16 sm:py-20 bg-gradient-to-br from-brand/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center text-ink">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <a
              href="https://www.acrointhesun.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src="/mac-logo.webp"
                  alt="Mediterranean Acro Convention"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-2 text-ink group-hover:text-brand transition-colors">
                Mediterranean Acro Convention
              </h3>
              <p className="text-ink/60 text-sm">
                Acro yoga & community on the coast
              </p>
            </a>
            <a
              href="https://www.tryflowgrid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src="/flow-grid.png"
                  alt="FlowGrid"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-2 text-ink group-hover:text-brand transition-colors">
                FlowGrid
              </h3>
              <p className="text-ink/60 text-sm">
                Tools for flow & productivity
              </p>
            </a>
            <a
              href="https://lifestories.love"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src="/life-stories.png"
                  alt="Life Stories"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-2 text-ink group-hover:text-brand transition-colors">
                Life Stories
              </h3>
              <p className="text-ink/60 text-sm">
                Capture & share meaningful memories
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section py-16 sm:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 sm:mb-8 text-ink">
            Stay Connected
          </h2>
          <p className="text-lg sm:text-xl text-ink/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join our community of growth-minded individuals and get weekly insights delivered to your inbox.
          </p>
          <MailingListForm />
        </div>
      </section>
    </main>
    </>
  );
}
