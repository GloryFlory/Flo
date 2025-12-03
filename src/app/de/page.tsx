import EpisodeCard from '../../components/EpisodeCard';
import MailingListForm from '../../components/MailingListForm';
import { getMessages } from '../../../lib/i18n/dictionaries';

export default async function GermanHomePage() {
  const homeMessages = await getMessages('de', 'home');
  
  // Structured data for SEO in German
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://florianhohenleitner.com/de#person',
        name: 'Florian Hohenleitner',
        jobTitle: 'Life Coach & Podcast-Moderator',
        description: 'Life Coach und Moderator des Grow with the Flo Podcasts, hilft Menschen dabei, authentisch zu leben und bedeutungsvoll zu wachsen.',
        url: 'https://florianhohenleitner.com/de',
        image: 'https://florianhohenleitner.com/profile.jpeg',
        sameAs: [
          'https://open.spotify.com/show/3vRG8eplIkpnBBAUPpih2N',
          'https://podcasts.apple.com/us/podcast/grow-with-the-flo/id1795716394',
        ],
        knowsAbout: [
          'Life Coaching',
          'Persönlichkeitsentwicklung',
          'Mentale Gesundheit',
          'Angstmanagement',
          'Authentisches Leben',
          'Achtsamkeit',
          'Persönliches Wachstum'
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://florianhohenleitner.com/de#website',
        url: 'https://florianhohenleitner.com/de',
        name: 'Florian Hohenleitner - Life Coach & Podcast-Moderator',
        description: 'Verwandle dein Leben mit authentischem Coaching und echten Gesprächen beim Grow with the Flo Podcast.',
        publisher: {
          '@id': 'https://florianhohenleitner.com/de#person'
        },
        inLanguage: 'de',
      },
      {
        '@type': 'PodcastSeries',
        '@id': 'https://florianhohenleitner.com/de/podcast#podcast',
        name: 'Grow with the Flo',
        description: 'Offene, ehrliche und echte Gespräche über das Leben. Moderiert von Flo erforscht dieser Podcast, was es wirklich bedeutet zu wachsen, sich zu verbinden und zu lernen in einer Welt, die oft Filter über Authentizität stellt.',
        url: 'https://florianhohenleitner.com/de/podcast',
        image: 'https://florianhohenleitner.com/podcast-logo.png',
        author: {
          '@id': 'https://florianhohenleitner.com/de#person'
        },
        publisher: {
          '@id': 'https://florianhohenleitner.com/de#person'
        },
        genre: ['Persönlichkeitsentwicklung', 'Mentale Gesundheit', 'Selbsthilfe'],
        webFeed: 'https://anchor.fm/s/100089160/podcast/rss',
        inLanguage: 'de'
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
            {homeMessages.hero?.tagline || 'Coaching • Podcast • Kreatives Wachstum'}
          </div>
          <h1 className="text-white font-heading font-extrabold text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-none mb-6 drop-shadow-lg px-4">
            {homeMessages.hero?.name || 'Florian Hohenleitner'}
          </h1>
          <a
            href="/de/podcast"
            className="bg-brand text-white font-bold rounded px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 shadow hover:bg-brand/90 transition mx-4"
          >
            {homeMessages.hero?.cta || 'Höre Grow with the Flo'}
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

      {/* About card overlapping hero */}
      <div className="relative z-50 w-full flex justify-center -mt-24 sm:-mt-32 lg:-mt-48 px-4">
        <div className="bg-white rounded-xl shadow-lg px-6 sm:px-10 py-6 sm:py-8 lg:py-10 max-w-3xl w-full">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-4 sm:mb-6 text-center">
            {homeMessages.about?.title || 'Über Flo'}
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
                {homeMessages.about?.roles?.map((role: string, index: number) => (
                  <li key={index}>{role}</li>
                )) || (
                  <>
                    <li>Coach & Podcast-Moderator</li>
                    <li>Spezialist für Persönlichkeitsentwicklung</li>
                    <li>Retreat-Leiter</li>
                    <li>Kreativer Profi</li>
                  </>
                )}
              </ul>
              <p className="text-ink text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                {homeMessages.about?.description || 'Florian ist ein leidenschaftlicher Coach und Podcast-Moderator, der Kreativen und Fachkräften dabei hilft, ihren Flow, ihre Widerstandsfähigkeit und ihren Zweck zu entdecken. Er glaubt, dass Wachstum am besten gemeinsam erreicht wird, und seine Arbeit ist darauf ausgerichtet, Verbindung und Transformation für alle zu schaffen.'}
              </p>
              <a
                href="/de/about"
                className="inline-block bg-brand text-white font-bold rounded px-4 sm:px-6 py-2 text-sm sm:text-base shadow hover:bg-brand/90 transition"
              >
                Weiterlesen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="section py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-12 sm:mb-16 text-center text-ink">
            {homeMessages.programs?.title || 'Programme'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Living with Ease */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-sm mx-auto h-full">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-brand/20 to-brand/40 flex items-center justify-center p-6 sm:p-8">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-xl">
                  <img
                    src="/anxiety.jpg"
                    alt="Leben mit Leichtigkeit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                  {homeMessages.programs?.livingWithEase?.title || 'Leben mit Leichtigkeit'}
                </h3>
                <p className="text-ink/80 mb-4 text-sm sm:text-base font-medium h-6">
                  {homeMessages.programs?.livingWithEase?.subtitle || 'Angst-Programm'}
                </p>
                <p className="text-ink/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed flex-1">
                  {homeMessages.programs?.livingWithEase?.description || 'Verwandle deine Beziehung zur Angst und entdecke Werkzeuge für dauerhaften Frieden und Selbstvertrauen.'}
                </p>
                <a
                  href="/de/programs/living-with-ease"
                  className="inline-block bg-brand text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>

            {/* Becoming the Authentic Man */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-sm mx-auto h-full">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center p-6 sm:p-8">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-xl">
                  <img
                    src="/authentic.jpg"
                    alt="Der authentische Mann werden"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                  {homeMessages.programs?.authenticMan?.title || 'Der authentische Mann werden'}
                </h3>
                <p className="text-ink/80 mb-4 text-sm sm:text-base font-medium h-6">
                  {homeMessages.programs?.authenticMan?.subtitle || 'Männerentwicklungsprogramm'}
                </p>
                <p className="text-ink/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed flex-1">
                  {homeMessages.programs?.authenticMan?.description || 'Eine Reise der Selbstentdeckung, um deine wahre Männlichkeit zu umarmen und mit Zweck und Integrität zu leben.'}
                </p>
                <a
                  href="/de/programs/authentic-man"
                  className="inline-block bg-brand text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>

            {/* Connection & Relationships */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-sm mx-auto h-full">
              <div className="h-64 sm:h-80 bg-gradient-to-br from-[#6b7a40]/20 to-[#6b7a40]/40 flex items-center justify-center p-6 sm:p-8">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-xl">
                  <img
                    src="/connection.jpg"
                    alt="Verbindung & Beziehungen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                  {homeMessages.programs?.connection?.title || 'Verbindung & Beziehungen'}
                </h3>
                <p className="text-ink/80 mb-4 text-sm sm:text-base font-medium h-6">
                  {homeMessages.programs?.connection?.subtitle || 'Beziehungscoaching'}
                </p>
                <p className="text-ink/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed flex-1">
                  {homeMessages.programs?.connection?.description || 'Baue tiefere, bedeutungsvollere Verbindungen auf und verwandle deine Beziehungen zu anderen und zu dir selbst.'}
                </p>
                <a
                  href="/de/programs/connection-relationships"
                  className="inline-block bg-brand text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section py-16 sm:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 sm:mb-8 text-ink">
            {homeMessages.newsletter?.title || 'Bleib in Verbindung'}
          </h2>
          <p className="text-lg sm:text-xl text-ink/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            {homeMessages.newsletter?.description || 'Tritt unserer Gemeinschaft wachstumsorientierter Menschen bei und erhalte wöchentliche Einblicke direkt in deinen Posteingang.'}
          </p>
          <MailingListForm />
        </div>
      </section>
    </main>
    </>
  );
}
