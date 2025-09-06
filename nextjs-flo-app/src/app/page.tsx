

import EpisodeCard from '../components/EpisodeCard';
import MailingListForm from '../components/MailingListForm';

const episodes = [
  {
    title: 'Finding Your Flow',
    blurb: 'Discover how to unlock your potential and live with purpose.',
    link: '/podcast',
  },
  {
    title: 'Mindset Matters',
    blurb: 'How to cultivate a growth mindset for lasting change.',
    link: '/podcast',
  },
  {
    title: 'Resilience & Recovery',
    blurb: 'Bounce back from setbacks and thrive in adversity.',
    link: '/podcast',
  },
  {
    title: 'Coaching for Creatives',
    blurb: 'Tools and stories for creative professionals.',
    link: '/podcast',
  },
];

export default function HomePage() {

  // Newsletter popup logic commented out
  // const [showNewsletter, setShowNewsletter] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => setShowNewsletter(true), 1000);
  // }, []);

  return (
    <main>

      {/* Newsletter Popup commented out */}
      {false && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <img src="/profile.jpeg" alt="Florian" className="w-20 h-20 rounded-full object-cover border-2 border-brand mx-auto mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Join the Grow with the Flo Newsletter</h3>
            <p className="mb-4 text-ink text-sm">Get exclusive insights, coaching tips, and podcast updates from Florian. Be the first to know about new episodes, special offers, and community events. Join a growing group of creatives and professionals who want to grow, connect, and thrive!</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="border border-brand rounded px-4 py-2" />
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <button className="mt-4 text-sm text-brand underline" onClick={() => {}}>Close</button>
          </div>
        </div>
      )}

      <section className="relative w-full min-h-[800px] flex flex-col items-center justify-center bg-black/80 overflow-hidden pb-40">
        <img src="/header.jpg" alt="Header" className="absolute inset-0 w-full h-full object-cover object-top opacity-60 pointer-events-none" style={{zIndex:0}} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full pt-32">
          <div className="uppercase tracking-widest text-brand text-lg mb-4">Coaching • Podcast • Creative Growth</div>
          <h1 className="text-white font-heading font-extrabold text-center text-[5rem] md:text-[7rem] leading-none mb-4 drop-shadow-lg">Florian Hohenleitner</h1>
          <a href="/podcast" className="bg-brand text-white font-bold rounded px-8 py-3 text-lg mb-10 shadow hover:bg-brand/90 transition">Listen to Grow with the Flo</a>
          <div className="flex justify-center gap-6 mb-20">
            <a href="https://www.youtube.com/@GrowWithTheFloPodcast" target="_blank" rel="noopener" aria-label="YouTube" className="hover:opacity-80">
              <img src="/youtube.png" alt="YouTube" width={36} height={36} />
            </a>
            <a href="https://www.instagram.com/grow.with_the.flo/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:opacity-80">
              <img src="/instagram.png" alt="Instagram" width={36} height={36} />
            </a>
          </div>
        </div>
        {/* About card overlapping hero, slightly lower */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-160px] z-20 w-full flex justify-center">
          <div className="bg-white rounded-xl shadow-lg flex flex-row items-center px-10 py-10 max-w-3xl w-full gap-8">
            <img src="/profile.jpeg" alt="Florian" className="w-56 h-56 rounded-lg object-cover border-4 border-brand shadow-lg" />
            <div className="flex-1">
              <h2 className="text-3xl font-heading font-bold mb-2">About Florian</h2>
              <ul className="list-disc pl-5 mb-4 text-ink text-lg">
                <li>Coach & Podcast Host</li>
                <li>Personal Growth Specialist</li>
                <li>Retreat Leader</li>
                <li>Creative Professional</li>
              </ul>
              <p className="text-ink text-base mb-4">Florian is a passionate coach and podcast host helping creatives and professionals unlock their flow, resilience, and purpose. He believes growth is best achieved together, and his work is dedicated to building connection and transformation for all.</p>
              <a href="/about" className="bg-brand text-white font-bold rounded px-6 py-2 text-base shadow hover:bg-brand/90 transition">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Themed section between hero and services with About card again */}
      <section className="w-full py-40 bg-sand flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg flex flex-row items-center px-10 py-10 max-w-3xl w-full gap-8">
          <img src="/profile.jpeg" alt="Florian" className="w-56 h-56 rounded-lg object-cover border-4 border-brand shadow-lg" />
          <div className="flex-1">
            <h2 className="text-3xl font-heading font-bold mb-2">About Florian</h2>
            <ul className="list-disc pl-5 mb-4 text-ink text-lg">
              <li>Coach & Podcast Host</li>
              <li>Personal Growth Specialist</li>
              <li>Retreat Leader</li>
              <li>Creative Professional</li>
            </ul>
            <p className="text-ink text-base mb-4">Florian is a passionate coach and podcast host helping creatives and professionals unlock their flow, resilience, and purpose. He believes growth is best achieved together, and his work is dedicated to building connection and transformation for all.</p>
            <a href="/about" className="bg-brand text-white font-bold rounded px-6 py-2 text-base shadow hover:bg-brand/90 transition">Read More</a>
          </div>
        </div>
      </section>
    {/* Themed section between hero and services, now empty for About card overlap */}
    <section className="w-full py-40 bg-sand"></section>

      {/* Services Section - styled as cards, 3 columns on desktop, 1 on mobile */}
      <section className="section py-24 bg-[#f4f3fa]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg border p-10 flex flex-col items-center w-full">
              <div className="w-72 h-72 rounded-full overflow-hidden flex items-center justify-center mb-8 bg-sand">
                <img src="/service-growth.jpg" alt="Personal Growth Course" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-3xl font-heading mb-4 text-center">Personal Growth Course</h3>
              <hr className="w-full border-ink/30 mb-4" />
              <div className="text-xl text-ink mb-4">€250</div>
              <a href="#" className="btn btn-dark w-full">View Course</a>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg border p-10 flex flex-col items-center w-full">
              <div className="w-72 h-72 rounded-full overflow-hidden flex items-center justify-center mb-8 bg-sand">
                <img src="/service-anxiety.jpg" alt="Anxiety Coaching" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-3xl font-heading mb-4 text-center">Anxiety Coaching</h3>
              <hr className="w-full border-ink/30 mb-4" />
              <div className="text-xl text-ink mb-4">€100</div>
              <a href="#" className="btn btn-dark w-full">Book Now</a>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg border p-10 flex flex-col items-center w-full">
              <div className="w-72 h-72 rounded-full overflow-hidden flex items-center justify-center mb-8 bg-sand">
                <img src="/service-mindset.jpg" alt="Mindset Workshop" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-3xl font-heading mb-4 text-center">Mindset Workshop</h3>
              <hr className="w-full border-ink/30 mb-4" />
              <div className="text-xl text-ink mb-4">€50</div>
              <a href="#" className="btn btn-dark w-full">Book Now</a>
            </div>
          </div>
        </div>
      </section>
  {/* Podcast section removed as requested */}

    </main>
  );
}
