export default function LivingWithEase() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand/10 to-brand/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-6 border-white shadow-xl">
            <img
              src="/anxiety.jpg"
              alt="Leben mit Leichtigkeit"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 text-ink">
            Leben mit Leichtigkeit
          </h1>
          <p className="text-xl text-brand font-medium mb-6">
            Angst-Programm
          </p>
          <p className="text-lg text-ink/80 max-w-3xl mx-auto leading-relaxed">
            Transformiere deine Beziehung zur Angst und entdecke Werkzeuge für dauerhaften Frieden und Selbstvertrauen. 
            Wähle aus drei personalisierten Coaching-Optionen, die dich dort abholen, wo du stehst.
          </p>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-gradient-to-br from-brand/5 to-brand/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Transformiere deine Beziehung zur Angst
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">
                Was du entdecken wirst
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-brand mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Ursachen verstehen</h4>
                    <p className="text-ink/70">Entdecke die tieferen Muster und Auslöser hinter deiner Angst</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-brand mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Praktische Bewältigungstools</h4>
                    <p className="text-ink/70">Evidenzbasierte Techniken für sofortige Erleichterung und langfristige Bewältigung</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-brand mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Achtsame Wahrnehmung</h4>
                    <p className="text-ink/70">Lerne, deine Gedanken zu beobachten, ohne von ihnen überwältigt zu werden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-brand mr-3 mt-1 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Selbstvertrauen aufbauen</h4>
                    <p className="text-ink/70">Entwickle unerschütterliches Selbstvertrauen und inneren Frieden</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">
                Deine Transformationsreise
              </h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-brand">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Identifizieren & Verstehen</h4>
                    <p className="text-ink/70 text-sm">Kartiere deine Angstmuster und Auslöser</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-brand">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Dein Werkzeugkasten aufbauen</h4>
                    <p className="text-ink/70 text-sm">Lerne personalisierte Bewältigungsstrategien</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-brand">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Üben & Integrieren</h4>
                    <p className="text-ink/70 text-sm">Wende Werkzeuge in realen Situationen an</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold text-brand">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Mit Leichtigkeit leben</h4>
                    <p className="text-ink/70 text-sm">Erlebe dauerhaften Frieden und Selbstvertrauen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Tiers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Wähle deinen Weg
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Tier 1: Starter Sessions */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-brand/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Starter Sessions</h3>
              
              {/* Program Details */}
              <div className="bg-brand/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>1 Session</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session Länge:</span>
                    <span>60 Minuten</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 Coaching</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>Follow-up Arbeitsblatt</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-brand font-medium mb-2">Einstiegslevel</p>
                <div className="text-3xl font-bold text-brand mb-4">€120</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Schnelle Klarheit über Angst-Herausforderungen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Umsetzbare Erkenntnisse & Ressourcen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Personalisierte Bewältigungsstrategien</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Perfekt für die erste Coaching-Erfahrung</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/living-with-ease?utm_campaign=living-with-ease&utm_source=website&utm_medium=starter-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 w-full mt-auto"
              >
                Session buchen
              </a>
            </div>

            {/* Tier 2: Growth Journey */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-brand p-8 text-center relative flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-brand text-white px-4 py-1 rounded-full text-sm font-medium">Beliebteste Wahl</span>
              </div>
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Wachstumsreise</h3>
              
              {/* Program Details */}
              <div className="bg-brand/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>6-8 Wochen</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>6 × 60min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 Coaching</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>WhatsApp Check-ins</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-brand font-medium mb-2">Kern-Paket</p>
                <div className="text-3xl font-bold text-brand mb-4">€750</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Tiefe Angst-Transformation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Personalisierte Ressourcen & Praktiken</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Laufende Unterstützung zwischen Sessions</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Für engagierte Transformation mit Verantwortlichkeit</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/living-with-ease?utm_campaign=living-with-ease&utm_source=website&utm_medium=growth-journey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 w-full mt-auto"
              >
                Reise starten
              </a>
            </div>

            {/* Tier 3: The Immersion */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-brand/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Die Immersion</h3>
              
              {/* Program Details */}
              <div className="bg-brand/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>3 Monate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>12 × 75min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 + Intensiv</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>Priorität + Chat</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-brand font-medium mb-2">Premium Erfahrung</p>
                <div className="text-3xl font-bold text-brand mb-4">€2,000</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Ganzheitliche Angst-, Authentizitäts- & Verbindungsarbeit</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Laufender Chat-Support & Prioritätsbuchung</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Optional 1-tägiges persönliches Intensiv</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Komplette Transformation mit tiefer Unterstützung</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/living-with-ease?utm_campaign=living-with-ease&utm_source=website&utm_medium=immersion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 w-full mt-auto"
              >
                Immersion beginnen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Was Klienten sagen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"Deine Stimme ist sehr beruhigend und motivierend... Du klingst sehr authentisch und du bist die Art von Anführer, dem ich vertrauen und folgen würde, egal ob ich dich persönlich kenne oder nicht."</p>
              <div className="text-brand font-medium">— Daria</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"Die Arbeit mit Flo half mir, meine Angstmuster zu verstehen und gab mir praktische Werkzeuge, die tatsächlich in realen Situationen funktionieren."</p>
              <div className="text-brand font-medium">— Emma, 29</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand to-brand/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Bereit, deine Beziehung zur Angst zu transformieren?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Lass nicht länger zu, dass Angst dein Leben kontrolliert. Beginne heute deine Reise zu innerem Frieden und Selbstvertrauen.
          </p>
          <a
            href="https://meet.brevo.com/florian-hohenleitner/living-with-ease?utm_campaign=living-with-ease&utm_source=website&utm_medium=discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Dein Entdeckungsgespräch buchen
          </a>
        </div>
      </section>
    </main>
  );
}
