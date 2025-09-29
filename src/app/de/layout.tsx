import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Florian Hohenleitner - Life Coach & Moderator des Grow with the Flo Podcasts',
    template: '%s | Florian Hohenleitner'
  },
  description: 'Verwandle dein Leben mit authentischem Coaching und echten Gesprächen. Begleite Florian Hohenleitner beim Grow with the Flo Podcast für ehrliche Diskussionen über persönliches Wachstum, Angst und bedeutungsvolle Verbindungen.',
  keywords: [
    'life coach',
    'persönliches wachstum',
    'podcast',
    'angst coaching',
    'authentisches leben',
    'mentale gesundheit',
    'persönlichkeitsentwicklung',
    'Grow with the Flo',
    'Florian Hohenleitner',
    'lebenstransformation',
    'achtsamkeit',
    'selbstentdeckung'
  ],
  authors: [{ name: 'Florian Hohenleitner' }],
  creator: 'Florian Hohenleitner',
  publisher: 'Florian Hohenleitner',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://florianhohenleitner.com'),
  alternates: {
    canonical: '/de',
    languages: {
      'en': '/',
      'de': '/de',
    }
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://florianhohenleitner.com/de',
    title: 'Florian Hohenleitner - Life Coach & Moderator des Grow with the Flo Podcasts',
    description: 'Verwandle dein Leben mit authentischem Coaching und echten Gesprächen. Begleite Florian Hohenleitner beim Grow with the Flo Podcast für ehrliche Diskussionen über persönliches Wachstum, Angst und bedeutungsvolle Verbindungen.',
    siteName: 'Florian Hohenleitner',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Florian Hohenleitner - Life Coach & Podcast-Moderator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florian Hohenleitner - Life Coach & Moderator des Grow with the Flo Podcasts',
    description: 'Verwandle dein Leben mit authentischem Coaching und echten Gesprächen. Begleite Florian Hohenleitner beim Grow with the Flo Podcast für ehrliche Diskussionen über persönliches Wachstum, Angst und bedeutungsvolle Verbindungen.',
    images: ['/og-image.jpg'],
    creator: '@florianhohenleitner',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Language-specific head elements */}
      <link rel="alternate" hrefLang="en" href="https://florianhohenleitner.com" />
      <link rel="alternate" hrefLang="de" href="https://florianhohenleitner.com/de" />
      <link rel="alternate" hrefLang="x-default" href="https://florianhohenleitner.com" />
      {children}
    </>
  );
}
