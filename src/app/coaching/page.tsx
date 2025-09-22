export default function Coaching() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8 text-center text-ink">
            Coaching
          </h1>
          <p className="text-lg sm:text-xl text-ink/80 text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
            For thoughtful people navigating change (career, identity, relationships) who want clarity without self-abandonment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="bg-sand rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-ink">Who it's for</h2>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-ink">
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  High-functioning overthinkers
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Navigating transitions with anxiety present
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Seeking practical tools + deeper connection
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Creative professionals feeling stuck
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  People ready to do the inner work
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-ink">Outcomes</h2>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-ink">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  A clearer, kinder inner voice
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Action you can trust (even when it's scary)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Grounding practices that fit real life
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Confidence in your creative expression
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Tools for navigating uncertainty
                </li>
              </ul>
            </div>
          </div>

          {/* Programs Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center text-ink">
              Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Living with Ease */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col max-w-sm mx-auto h-full">
                <div className="h-80 bg-gradient-to-br from-brand/20 to-brand/40 flex items-center justify-center p-8">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-6 border-white shadow-xl">
                    <img
                      src="/anxiety.jpg"
                      alt="Living with Ease"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                    Living with Ease
                  </h3>
                  <p className="text-ink/80 mb-4 text-base font-medium h-6">
                    Anxiety Program
                  </p>
                  <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                    Transform your relationship with anxiety and discover tools for lasting peace and confidence.
                  </p>
                  <a
                    href="/programs/living-with-ease"
                    className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Becoming the Authentic Man */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col max-w-sm mx-auto h-full">
                <div className="h-80 bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center p-8">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-6 border-white shadow-xl">
                    <img
                      src="/authentic.jpg"
                      alt="Becoming the Authentic Man"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                    Becoming the Authentic Man
                  </h3>
                  <p className="text-ink/80 mb-4 text-base font-medium h-6">
                    Men's Development Program
                  </p>
                  <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                    A journey of self-discovery to embrace your true masculinity and live with purpose and integrity.
                  </p>
                  <a
                    href="/programs/authentic-man"
                    className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Connection & Relationships */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col max-w-sm mx-auto h-full">
                <div className="h-80 bg-gradient-to-br from-[#6b7a40]/20 to-[#6b7a40]/40 flex items-center justify-center p-8">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-6 border-white shadow-xl">
                    <img
                      src="/connection.jpg"
                      alt="Connection & Relationships"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-ink min-h-[2rem]">
                    Connection & Relationships
                  </h3>
                  <p className="text-ink/80 mb-4 text-base font-medium h-6">
                    Relationship Coaching
                  </p>
                  <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                    Build deeper, more meaningful connections and transform your relationships with others and yourself.
                  </p>
                  <a
                    href="/programs/connection-relationships"
                    className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-brand to-accent rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Join our waitlist to be the first to know when new coaching spots open up.
              </p>
              <a
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
