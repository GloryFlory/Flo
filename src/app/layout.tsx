import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Florian Hohenleitner - Grow with the Flo',
  description: 'Coaching, Podcast, and Creative Growth with Florian Hohenleitner',
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
