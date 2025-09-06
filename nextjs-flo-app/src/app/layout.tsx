import type { Metadata } from "next";
import '../styles/globals.css';
import Header from '../components/Header';

import Footer from '../components/Footer';
import Container from '../components/Container';
import MailingListForm from '../components/MailingListForm';

export const metadata: Metadata = {
  title: 'Florian Hohenleitner',
  description: 'Grow with the Flo – Podcast & Coaching by Florian',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" type="image/x-icon" href="/logo.ico" />
  <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="bg-sand text-ink">
        <Header />
        <Container>
          {children}
        </Container>
        {/* Mailing list form at the bottom of every page */}
        <section className="section mt-16">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-heading font-bold mb-2">Sign up for Flo's Mailing List</h3>
            <MailingListForm />
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://www.instagram.com/grow.with_the.flo/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#fff" fillOpacity="0.15"/>
                  <path d="M22 10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8zm-4 2.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" fill="#fff"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@GrowWithTheFloPodcast" target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#fff" fillOpacity="0.15"/>
                  <path d="M22.545 12.634a2.01 2.01 0 0 0-1.415-1.42C19.98 11 16 11 16 11s-3.98 0-5.13.214a2.01 2.01 0 0 0-1.415 1.42C9 13.784 9 16 9 16s0 2.216.214 3.366a2.01 2.01 0 0 0 1.415 1.42C12.02 21 16 21 16 21s3.98 0 5.13-.214a2.01 2.01 0 0 0 1.415-1.42C23 18.216 23 16 23 16s0-2.216-.214-3.366zM14.5 18.5v-5l4.5 2.5-4.5 2.5z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
