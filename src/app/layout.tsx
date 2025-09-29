import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Florian Hohenleitner - Life Coach & Host of Grow with the Flo Podcast',
    template: '%s | Florian Hohenleitner'
  },
  description: 'Transform your life with authentic coaching and real conversations. Join Florian Hohenleitner on the Grow with the Flo podcast for honest discussions about personal growth, anxiety, and meaningful connections.',
  keywords: [
    'life coach',
    'personal growth',
    'podcast',
    'anxiety coaching',
    'authentic living',
    'mental health',
    'personal development',
    'Grow with the Flo',
    'Florian Hohenleitner',
    'life transformation',
    'mindfulness',
    'self-discovery'
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
    canonical: '/',
    languages: {
      'en': '/',
      'de': '/de',
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://florianhohenleitner.com',
    title: 'Florian Hohenleitner - Life Coach & Host of Grow with the Flo Podcast',
    description: 'Transform your life with authentic coaching and real conversations. Join Florian Hohenleitner on the Grow with the Flo podcast for honest discussions about personal growth, anxiety, and meaningful connections.',
    siteName: 'Florian Hohenleitner',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Florian Hohenleitner - Life Coach & Podcast Host',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florian Hohenleitner - Life Coach & Host of Grow with the Flo Podcast',
    description: 'Transform your life with authentic coaching and real conversations. Join Florian Hohenleitner on the Grow with the Flo podcast for honest discussions about personal growth, anxiety, and meaningful connections.',
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'tq9fAV4jI1K5rtNWddH1wBJVPh_fuW_yHH6JbCOiGV8',
    other: {
      'msvalidate.01': 'B469502B9ACAD73712748DDCBE8C1559',
    },
  },
  other: {
    'msvalidate.01': 'B469502B9ACAD73712748DDCBE8C1559',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="B469502B9ACAD73712748DDCBE8C1559" />
        <link rel="alternate" hrefLang="en" href="https://florianhohenleitner.com" />
        <link rel="alternate" hrefLang="de" href="https://florianhohenleitner.com/de" />
        <link rel="alternate" hrefLang="x-default" href="https://florianhohenleitner.com" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
