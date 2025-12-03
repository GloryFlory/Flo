export default function AuthenticMan() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 to-accent/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-6 border-white shadow-xl">
            <img
              src="/authentic.jpg"
              alt="Der authentische Mann werden"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 text-ink">
            Der authentische Mann werden
          </h1>
          <p className="text-xl text-accent font-medium mb-6">
            Männerentwicklungsprogramm
          </p>
          <p className="text-lg text-ink/80 max-w-3xl mx-auto leading-relaxed">
            Befreie dich von gesellschaftlichen Erwartungen und entdecke dein authentisches Selbst. 
            Wähle aus drei personalisierten Coaching-Wegen, die darauf ausgelegt sind, dein wahres Potenzial freizusetzen.
          </p>
        </div>
      </section>

      {/* Core Program Areas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Die vier Säulen authentischer Männlichkeit
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Authentische Männlichkeit</h3>
              <p className="text-ink/70 mb-4">
                Befreie dich von toxischen männlichen Stereotypen und entdecke, was es wirklich bedeutet, ein Mann in der heutigen Welt zu sein.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Gesellschaftliche Erwartungen hinterfragen</li>
                <li>• Deine eigene männliche Identität definieren</li>
                <li>• Stärke mit Verletzlichkeit in Balance bringen</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Echter Selbstwert</h3>
              <p className="text-ink/70 mb-4">
                Baue Selbstvertrauen auf, das auf Selbstkenntnis basiert, nicht auf äußerer Validierung oder Leistung.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Innere Validierung entwickeln</li>
                <li>• Selbstmitgefühl kultivieren</li>
                <li>• Grenzen mit Integrität setzen</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Emotionale Intelligenz</h3>
              <p className="text-ink/70 mb-4">
                Lerne, deine Emotionen zu verstehen, auszudrücken und zu regulieren auf eine Weise, die authentisch und kraftvoll ist.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Emotionale Bewusstheit entwickeln</li>
                <li>• Gesunde Kommunikation lernen</li>
                <li>• Mit Verletzlichkeit Stärke zeigen</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Zielgerichtete Führung</h3>
              <p className="text-ink/70 mb-4">
                Entdecke deine einzigartige Mission und lerne, mit Integrität, Mitgefühl und Vision zu führen.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Deine Lebensmission klarstellen</li>
                <li>• Authentische Führungsqualitäten entwickeln</li>
                <li>• Positive Auswirkungen schaffen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Tiers */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Wähle deinen Entwicklungsweg
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Tier 1: Foundation Sessions */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-accent/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Fundament Sessions</h3>
              
              {/* Program Details */}
              <div className="bg-accent/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>1 Session</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session Länge:</span>
                    <span>75 Minuten</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 Coaching</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>Entwicklungsplan</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-accent font-medium mb-2">Entdeckungsebene</p>
                <div className="text-3xl font-bold text-accent mb-4">€120</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Klarheit über männliche Identität gewinnen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Kernwerte & Lebensmission erkunden</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Personalisierter Entwicklungsfahrplan</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Ideal für Männer, die bereit sind zu erkunden</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=foundation-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 w-full mt-auto"
              >
                Session buchen
              </a>
            </div>

            {/* Tier 2: Evolution Program */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-accent p-8 text-center relative flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">Beliebteste Wahl</span>
              </div>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Evolution Programm</h3>
              
              {/* Program Details */}
              <div className="bg-accent/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>8-10 Wochen</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>8 × 75min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 Coaching</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>WhatsApp + Ressourcen</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-accent font-medium mb-2">Transformationspaket</p>
                <div className="text-3xl font-bold text-accent mb-4">€750</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Tiefe Arbeit an allen vier Säulen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Praktische Übungen & Herausforderungen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Laufende Begleitung & Verantwortlichkeit</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Für Männer, die echte Veränderung wollen</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=evolution-program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 w-full mt-auto"
              >
                Evolution starten
              </a>
            </div>

            {/* Tier 3: The Mastery Path */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-accent/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Der Meisterschaftsweg</h3>
              
              {/* Program Details */}
              <div className="bg-accent/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>4 Monate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>16 × 90min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 + Gruppen</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>24/7 + Community</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-accent font-medium mb-2">Meisterschaftserfahrung</p>
                <div className="text-3xl font-bold text-accent mb-4">€2,000</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Komplette Männerentwicklung + Führung</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Private Community & Peer-Support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Option für persönliche Intensivs</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Für Männer, die Anführer werden wollen</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=mastery-path"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 w-full mt-auto"
              >
                Meisterschaft beginnen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Transformationen echter Männer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"Das Programm half mir zu verstehen, dass echte Stärke darin liegt, verletzlich und authentisch zu sein. Ich bin ein besserer Partner und Vater geworden."</p>
              <div className="text-accent font-medium">— Marcus, 34</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"Flo's Ansatz ist erfrischend ehrlich. Er hilft dir, deine eigene Version von Männlichkeit zu finden, nicht das, was die Gesellschaft erwartet."</p>
              <div className="text-accent font-medium">— Stefan, 28</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Bereit, der Mann zu werden, der du wirklich bist?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Befreie dich von gesellschaftlichen Erwartungen und entdecke deine authentische männliche Kraft.
          </p>
          <a
            href="https://meet.brevo.com/florian-hohenleitner/authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Dein Entdeckungsgespräch buchen
          </a>
        </div>
      </section>
    </main>
  );
}
