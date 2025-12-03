export default function Coaching() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8 text-center text-ink">
            Coaching
          </h1>
          <p className="text-lg sm:text-xl text-ink/80 text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
            Für nachdenkliche Menschen, die Veränderungen durchleben (Karriere, Identität, Beziehungen) und Klarheit ohne Selbstaufgabe wollen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <div className="bg-sand rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-ink">Für wen es ist</h2>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-ink">
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Hochfunktionale Grübler
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Übergänge mit vorhandener Angst bewältigen
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Praktische Werkzeuge + tiefere Verbindung suchen
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Kreative Profis, die sich festgefahren fühlen
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">•</span>
                  Menschen, die bereit sind, die innere Arbeit zu tun
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-ink">Ergebnisse</h2>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-ink">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Eine klarere, freundlichere innere Stimme
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Handlungen, denen du vertrauen kannst (auch wenn sie beängstigend sind)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Erdende Praktiken, die ins echte Leben passen
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Vertrauen in deinen kreativen Ausdruck
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  Werkzeuge für den Umgang mit Unsicherheit
                </li>
              </ul>
            </div>
          </div>

          {/* Programs Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold mb-12 text-center text-ink">
              Programme
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
                    Leben mit Leichtigkeit
                  </h3>
                  <p className="text-ink/80 mb-4 text-base font-medium h-6">
                    Angst-Programm
                  </p>
                  <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                    Transformiere deine Beziehung zur Angst und entdecke Werkzeuge für dauerhaften Frieden und Selbstvertrauen.
                  </p>
                  <a
                    href="/de/programs/living-with-ease"
                    className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                  >
                    Mehr erfahren
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
                    Der authentische Mann werden
                  </h3>
                  <p className="text-ink/80 mb-4 text-base font-medium h-6">
                    Männerentwicklungsprogramm
                  </p>
                  <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                    Eine Reise der Selbstfindung, um deine wahre Männlichkeit zu umarmen und mit Zweck und Integrität zu leben.
                  </p>
                  <a
                    href="/de/programs/authentic-man"
                    className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                  >
                    Mehr erfahren
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
                    Verbindung & Beziehungen
                  </h3>
                  <p className="text-ink/80 mb-4 text-base font-medium h-6">
                    Beziehungscoaching
                  </p>
                  <p className="text-ink/70 mb-8 text-base leading-relaxed flex-1">
                    Baue tiefere, bedeutungsvollere Verbindungen auf und transformiere deine Beziehungen zu anderen und zu dir selbst.
                  </p>
                  <a
                    href="/de/programs/connection-relationships"
                    className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 text-base text-center"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-brand to-accent rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                Bereit anzufangen?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Tritt unserer Warteliste bei, um als Erste/r zu erfahren, wann neue Coaching-Plätze verfügbar werden.
              </p>
              <a
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Zur Warteliste
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
