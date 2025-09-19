import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow with the Flo Podcast - Authentic Conversations About Life & Growth',
  description: 'Join Flo for open, honest conversations about personal growth, anxiety, mental health, and authentic living. Real stories, practical insights, and meaningful connections on the Grow with the Flo podcast.',
  keywords: [
    'Grow with the Flo podcast',
    'personal growth podcast',
    'mental health podcast',
    'anxiety podcast',
    'authentic living',
    'life coaching podcast',
    'self-development',
    'mindfulness podcast',
    'Florian Hohenleitner podcast',
    'meaningful conversations',
    'real talk podcast',
    'wellness podcast'
  ],
  openGraph: {
    title: 'Grow with the Flo Podcast - Authentic Conversations About Life & Growth',
    description: 'Join Flo for open, honest conversations about personal growth, anxiety, mental health, and authentic living. Real stories, practical insights, and meaningful connections.',
    type: 'website',
    url: 'https://florianhohenleitner.com/podcast',
    images: [
      {
        url: '/podcast-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Grow with the Flo Podcast Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow with the Flo Podcast - Authentic Conversations About Life & Growth',
    description: 'Join Flo for open, honest conversations about personal growth, anxiety, mental health, and authentic living.',
    images: ['/podcast-logo.png'],
  },
  alternates: {
    canonical: '/podcast',
  },
};

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
