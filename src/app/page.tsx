import EpisodeCard from '../components/EpisodeCard';
import MailingListForm from '../components/MailingListForm';
import HeroContent from '../components/HeroContent';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedOnLoad from '../components/AnimatedOnLoad';
import ParallaxHero from '../components/ParallaxHero';
import ProjectCards from '../components/ProjectCards';

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
            About Flo
          </h2>
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            {/* Photos stacked vertically */}
            <div className="flex-shrink-0 flex flex-col gap-3 w-full sm:w-40 lg:w-48">
              <img
                src="/profile.jpeg"
                alt="Florian"
                className="w-full aspect-square rounded-lg object-cover border-4 border-brand shadow-lg"
              />
              <img
                src="/profile2.jpeg"
                alt="Florian"
                className="w-full aspect-square rounded-lg object-cover shadow-md"
              />
              <img
                src="/profile3.jpg"
                alt="Florian"
                className="w-full aspect-square rounded-lg object-cover shadow-md"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed font-medium">
                Former compliance director. Yoga teacher. Podcast host. Retreat organiser. Nomad.
              </p>
              <p className="text-ink/70 text-sm sm:text-base mb-4 leading-relaxed italic">
                Honest conversations about growth, connection, and figuring it out as you go.
              </p>
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                I'm not a guru. I don't have it figured out.
              </p>
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                I'm someone who left a career that looked good from the outside, lost his identity with it, and spent the last year and a half travelling, training, building, failing, and slowly falling back in love with himself — imperfectly, and mostly in Vietnam.
              </p>
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                I organise events and retreats that help people connect — with each other and with themselves. I host a podcast where I share what's actually going on. And I'm working on something I've been building toward my whole life: a retreat that brings together movement, breathwork, and the kind of human connection that actually changes something.
              </p>
              <p className="text-ink text-sm sm:text-base mb-4 leading-relaxed">
                If any of that resonates — you're in the right place.
              </p>
              <a
                href="/about"
                className="inline-block bg-brand text-white font-bold rounded px-4 sm:px-6 py-2 text-sm sm:text-base shadow hover:bg-brand/90 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </AnimatedOnLoad>
      </div>

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

      {/* Projects Section */}
      <section className="section py-16 sm:py-20 bg-gradient-to-br from-brand/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center text-ink">
              Projects
            </h2>
          </AnimatedSection>
          <ProjectCards />
        </div>
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
