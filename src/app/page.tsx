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
  return (
    <main>
      {/* Hero section */}
      <section className="relative w-full h-[1060px] flex flex-col items-center justify-center bg-black/80 overflow-hidden pb-40">
        <img
          src="/header.jpg"
          alt="Header"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full pt-32">
          <div className="uppercase tracking-widest text-brand text-lg mb-4 font-bold">
            Coaching • Podcast • Creative Growth
          </div>
          <h1 className="text-white font-heading font-extrabold text-center text-[5rem] md:text-[7rem] leading-none mb-4 drop-shadow-lg">
            Florian Hohenleitner
          </h1>
          <a
            href="/podcast"
            className="bg-brand text-white font-bold rounded px-8 py-3 text-lg mb-10 shadow hover:bg-brand/90 transition"
          >
            Listen to Grow with the Flo
          </a>
          <div className="flex justify-center gap-6 mb-20">
            <a
              href="https://www.youtube.com/@GrowWithTheFloPodcast"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
              className="hover:opacity-80"
            >
              <img src="/youtube.png" alt="YouTube" width={36} height={36} />
            </a>
            <a
              href="https://www.instagram.com/grow.with_the.flo/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <img src="/instagram.png" alt="Instagram" width={36} height={36} />
            </a>
          </div>
        </div>
      </section>

      {/* About card overlapping hero - moved outside hero section */}
      <div className="relative z-50 w-full flex justify-center -mt-48">
        <div className="bg-white rounded-xl shadow-lg flex flex-row items-center px-10 py-10 max-w-3xl w-full gap-8">
          <img
            src="/profile.jpeg"
            alt="Florian"
            className="w-56 h-56 rounded-lg object-cover border-4 border-brand shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-bold mb-2">
              About Florian
            </h2>
            <ul className="list-disc pl-5 mb-4 text-ink text-lg">
              <li>Coach & Podcast Host</li>
              <li>Personal Growth Specialist</li>
              <li>Retreat Leader</li>
              <li>Creative Professional</li>
            </ul>
            <p className="text-ink text-base mb-4">
              Florian is a passionate coach and podcast host helping creatives
              and professionals unlock their flow, resilience, and purpose. He
              believes growth is best achieved together, and his work is
              dedicated to building connection and transformation for all.
            </p>
            <a
              href="/about"
              className="bg-brand text-white font-bold rounded px-6 py-2 text-base shadow hover:bg-brand/90 transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-heading font-bold mb-16 text-center text-ink">
            Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Living with Ease */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col max-w-sm mx-auto h-full">
              <div className="h-80 bg-gradient-to-br from-brand/20 to-brand/40 flex items-center justify-center p-8">
                <div className="w-56 h-56 rounded-full overflow-hidden border-6 border-white shadow-xl">
                  <img
                    src="/anxiety.jpg"
                    alt="Living with Ease"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-heading font-bold mb-3 text-ink">
                  Living with Ease
                </h3>
                <p className="text-ink/80 mb-4 text-base font-medium h-6">
                  Anxiety Program
                </p>
                <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                  Transform your relationship with anxiety and discover tools for lasting peace and confidence.
                </p>
                <a
                  href="/programs/living-with-ease"
                  className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Becoming the Authentic Man */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col max-w-sm mx-auto h-full">
              <div className="h-80 bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center p-8">
                <div className="w-56 h-56 rounded-full overflow-hidden border-6 border-white shadow-xl">
                  <img
                    src="/authentic.jpg"
                    alt="Becoming the Authentic Man"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-heading font-bold mb-3 text-ink">
                  Becoming the Authentic Man
                </h3>
                <p className="text-ink/80 mb-4 text-base font-medium h-6">
                  Men's Development Program
                </p>
                <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                  A journey of self-discovery to embrace your true masculinity and live with purpose and integrity.
                </p>
                <a
                  href="/programs/authentic-man"
                  className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Connection & Relationships */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col max-w-sm mx-auto h-full">
              <div className="h-80 bg-gradient-to-br from-[#6b7a40]/20 to-[#6b7a40]/40 flex items-center justify-center p-8">
                <div className="w-56 h-56 rounded-full overflow-hidden border-6 border-white shadow-xl">
                  <img
                    src="/connection.jpg"
                    alt="Connection & Relationships"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-heading font-bold mb-3 text-ink">
                  Connection & Relationships
                </h3>
                <p className="text-ink/80 mb-4 text-base font-medium h-6" style={{color: '#6b7a40'}}>
                  Relationship Coaching
                </p>
                <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                  Build deeper, more meaningful connections and transform your relationships with others and yourself.
                </p>
                <a
                  href="/programs/connection-relationships"
                  className="inline-block px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-base text-center text-white hover:opacity-90"
                  style={{backgroundColor: '#6b7a40'}}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-heading font-bold mb-8 text-ink">
            Stay Connected
          </h2>
          <p className="text-xl text-ink/80 mb-12 max-w-2xl mx-auto">
            Join our community of growth-minded individuals and get weekly insights delivered to your inbox.
          </p>
          <MailingListForm />
        </div>
      </section>
    </main>
  );
}
