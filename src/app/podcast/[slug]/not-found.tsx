import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-sand">
      <section className="section py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-ink mb-4">
            Episode Not Found
          </h1>
          <p className="text-lg text-ink/70 mb-8">
            Sorry, we couldn't find the episode you're looking for.
          </p>
          <Link 
            href="/podcast"
            className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand/90 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all episodes
          </Link>
        </div>
      </section>
    </main>
  );
}
