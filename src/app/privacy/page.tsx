import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Florian Hohenleitner collects, uses, and stores your information.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-sand">
      <section className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-8">Privacy Policy</h1>

        <div className="prose prose-sm sm:prose-base max-w-none text-ink/80 space-y-6">
          <p>
            This page explains what information this site collects, why, and what happens to it.
            If anything here is unclear, email{' '}
            <a href="mailto:hello@florianhohenleitner.com" className="text-brand hover:underline">
              hello@florianhohenleitner.com
            </a>{' '}
            and I&apos;ll answer directly.
          </p>

          <div>
            <h2 className="font-heading font-bold text-xl text-ink mb-2">Retreat interest list</h2>
            <p>
              On the <a href="/retreat" className="text-brand hover:underline">/retreat</a> page you can leave your email
              (and optionally your name) to be notified when The Connection Retreat opens for booking. That
              information is stored solely to send you that announcement — it is not shared with third parties,
              not used for advertising, and not visible to the public. You can ask to be removed at any time by
              emailing the address above.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-ink mb-2">Newsletter</h2>
            <p>
              The mailing list on the homepage and podcast pages works the same way: your email is used only to
              send the updates you signed up for, and you can unsubscribe from any email you receive.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-ink mb-2">Analytics</h2>
            <p>
              This site uses basic, privacy-respecting analytics to understand which pages are useful. No
              personally identifying data is sold or shared.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
