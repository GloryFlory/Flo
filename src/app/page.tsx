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
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black/80 overflow-hidden py-20 px-4">
        <img
          src="/header.jpg"
          alt="Header"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
          <div className="uppercase tracking-widest text-brand text-sm sm:text-lg mb-4 font-bold px-4">
            Coaching • Podcast • Creative Growth
          </div>
          <h1 className="text-white font-heading font-extrabold text-center text-4xl sm:text-6xl md:text-7xl leading-none mb-6 drop-shadow-lg px-4">
            Florian Hohenleitner
          </h1>
          <a
            href="/podcast"
            className="bg-brand text-white font-bold rounded px-6 sm:px-8 py-3 text-base sm:text-lg mb-10 shadow hover:bg-brand/90 transition mx-4"
          >
            Listen to Grow with the Flo
          </a>
          <div className="flex justify-center gap-4 sm:gap-6 mb-10 sm:mb-20 px-4">
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
      <div className="relative z-50 w-full flex justify-center -mt-32 sm:-mt-48 px-4">
        <div className="bg-white rounded-xl shadow-lg px-6 sm:px-10 py-8 sm:py-10 max-w-3xl w-full">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-center">
            About Flo
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0">
              <img
                src="/profile.jpeg"
                alt="Florian"
                className="w-40 h-40 sm:w-56 sm:h-56 rounded-lg object-cover border-4 border-brand shadow-lg mx-auto"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <ul className="list-disc pl-5 mb-4 text-ink text-base sm:text-lg space-y-1">
                <li>Coach & Podcast Host</li>
                <li>Personal Growth Specialist</li>
                <li>Retreat Leader</li>
                <li>Creative Professional</li>
              </ul>
              <p className="text-ink text-sm sm:text-base mb-4 leading-relaxed">
                Florian is a passionate coach and podcast host helping creatives
                and professionals unlock their flow, resilience, and purpose. He
                believes growth is best achieved together, and his work is
                dedicated to building connection and transformation for all.
              </p>
              <a
                href="/about"
                className="inline-block bg-brand text-white font-bold rounded px-6 py-2 text-base shadow hover:bg-brand/90 transition"
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

      {/* Upcoming Events Section */}
      <section className="section py-16 sm:py-20 bg-gradient-to-br from-brand/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center text-ink">
            Upcoming Events
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 sm:h-64 overflow-hidden">
                <img
                  src="/MAC.png"
                  alt="Mediterranean Acro Convention"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4 text-ink">
                  Mediterranean Acro Convention
                </h3>
                <p className="text-ink/70 mb-4 text-base sm:text-lg leading-relaxed px-2">
                  Join us for an unforgettable week of acro yoga, personal growth, and community connection on the beautiful Mediterranean coast.
                </p>
                <p className="text-teal-600 font-bold text-lg sm:text-xl mb-6">
                  October 8-12, 2025
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.acrointhesun.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-3 h-3 bg-brand rounded-full opacity-50"></button>
              <button className="w-3 h-3 bg-brand/30 rounded-full"></button>
              <button className="w-3 h-3 bg-brand/30 rounded-full"></button>
            </div>
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
  );
}
