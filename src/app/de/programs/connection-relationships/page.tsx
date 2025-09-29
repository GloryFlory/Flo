export default function ConnectionRelationships() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6b7a40]/10 to-[#6b7a40]/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-6 border-white shadow-xl">
            <img
              src="/connection.jpg"
              alt="Verbindung & Beziehungen"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 text-ink">
            Verbindung & Beziehungen
          </h1>
          <p className="text-xl text-[#6b7a40] font-medium mb-6">
            Beziehungscoaching Programm
          </p>
          <p className="text-lg text-ink/80 max-w-3xl mx-auto leading-relaxed">
            Baue tiefere, bedeutungsvollere Verbindungen auf und transformiere deine Beziehungen zu anderen und zu dir selbst. 
            Wähle aus drei Coaching-Optionen, die darauf ausgelegt sind, echte Intimität und Verbindung zu fördern.
          </p>
        </div>
      </section>

      {/* Core Program Areas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Die Säulen bedeutungsvoller Beziehungen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-[#6b7a40]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Authentische Kommunikation</h3>
              <p className="text-ink/70 mb-4">
                Lerne, dich klar, ehrlich und mitfühlend auszudrücken, während du anderen mit Präsenz und Verständnis zuhörst.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Gewaltfreie Kommunikationstechniken</li>
                <li>• Aktives Zuhören entwickeln</li>
                <li>• Gefühle und Bedürfnisse ausdrücken</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-[#6b7a40]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Emotionale Intimität</h3>
              <p className="text-ink/70 mb-4">
                Erschaffe sichere Räume für Verletzlichkeit und echte emotionale Verbindung in all deinen Beziehungen.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Verletzlichkeit mit Sicherheit praktizieren</li>
                <li>• Emotionale Verfügbarkeit entwickeln</li>
                <li>• Vertrauen aufbauen und erhalten</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-[#6b7a40]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Konfiktlösung</h3>
              <p className="text-ink/70 mb-4">
                Verwandle Konflikte in Gelegenheiten für tieferes Verständnis und stärkere Verbindungen.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Konstruktive Konfliktbewältigung</li>
                <li>• Grenzen respektvoll setzen</li>
                <li>• Meinungsverschiedenheiten navigieren</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-[#6b7a40]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Beziehung zu dir selbst</h3>
              <p className="text-ink/70 mb-4">
                Die Grundlage aller gesunden Beziehungen beginnt mit einer liebevollen, ehrlichen Beziehung zu dir selbst.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Selbstmitgefühl kultivieren</li>
                <li>• Persönliche Grenzen verstehen</li>
                <li>• Eigene Bedürfnisse ehren</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Tiers */}
      <section className="py-20 bg-gradient-to-br from-[#6b7a40]/5 to-[#6b7a40]/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Wähle deinen Verbindungsweg
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Tier 1: Connection Sessions */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#6b7a40]/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-[#6b7a40]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Verbindungs Sessions</h3>
              
              {/* Program Details */}
              <div className="bg-[#6b7a40]/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>1 Session</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session Länge:</span>
                    <span>90 Minuten</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 oder Paar</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>Kommunikations-Toolkit</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-[#6b7a40] font-medium mb-2">Verbindungsebene</p>
                <div className="text-3xl font-bold text-[#6b7a40] mb-4">€120</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Beziehungsmuster identifizieren</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Sofortige Kommunikationsverbesserungen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Personalisierte Beziehungstools</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Perfekt für sofortige Beziehungsverbesserungen</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/connection-relationships?utm_campaign=connection-relationships&utm_source=website&utm_medium=connection-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6b7a40] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6b7a40]/90 transition-colors duration-200 w-full mt-auto"
              >
                Session buchen
              </a>
            </div>

            {/* Tier 2: Relationship Transformation */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-[#6b7a40] p-8 text-center relative flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#6b7a40] text-white px-4 py-1 rounded-full text-sm font-medium">Beliebteste Wahl</span>
              </div>
              <div className="w-16 h-16 bg-[#6b7a40]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Beziehungs-<br />transformation</h3>
              
              {/* Program Details */}
              <div className="bg-[#6b7a40]/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>10-12 Wochen</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>10 × 90min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1, Paar oder gemischt</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>WhatsApp + Übungen</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-[#6b7a40] font-medium mb-2">Transformationspaket</p>
                <div className="text-3xl font-bold text-[#6b7a40] mb-4">€750</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Tiefe Beziehungsmuster-Arbeit</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Kommunikation & Intimität entwickeln</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Laufende praktische Übungen</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Für nachhaltige Beziehungsverbesserung</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/connection-relationships?utm_campaign=connection-relationships&utm_source=website&utm_medium=transformation-program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6b7a40] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6b7a40]/90 transition-colors duration-200 w-full mt-auto"
              >
                Transformation starten
              </a>
            </div>

            {/* Tier 3: The Love Mastery */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#6b7a40]/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-[#6b7a40]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Die Liebesmeisterschaft</h3>
              
              {/* Program Details */}
              <div className="bg-[#6b7a40]/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Programm Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Dauer:</span>
                    <span>6 Monate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>24 × 90min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>Intensiv + Retreats</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>24/7 + Community</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-[#6b7a40] font-medium mb-2">Meisterschaftserfahrung</p>
                <div className="text-3xl font-bold text-[#6b7a40] mb-4">€2,000</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Ganzheitliche Beziehungs- & Selbstliebe-Arbeit</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Private Community & Peer-Support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#6b7a40] mr-3 mt-1">•</span>
                    <span className="text-ink/70">Beziehungsretreat + Intensivs</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Für Paare und Einzelpersonen, die Liebesmeister werden wollen</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/connection-relationships?utm_campaign=connection-relationships&utm_source=website&utm_medium=love-mastery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6b7a40] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6b7a40]/90 transition-colors duration-200 w-full mt-auto"
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
            Transformierte Beziehungen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"Flo half uns, unsere Kommunikationsmuster zu durchbrechen. Wir sprechen jetzt ehrlicher und liebevoller miteinander als je zuvor."</p>
              <div className="text-[#6b7a40] font-medium">— Sarah & Tom, verheiratet seit 8 Jahren</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"Das Programm lehrte mich, dass eine bessere Beziehung zu anderen mit einer besseren Beziehung zu mir selbst beginnt."</p>
              <div className="text-[#6b7a40] font-medium">— Lisa, 31</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#6b7a40] to-[#6b7a40]/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Bereit für tiefere, bedeutungsvollere Verbindungen?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Transformiere deine Beziehungen und entdecke die Kraft authentischer Verbindung und Liebe.
          </p>
          <a
            href="https://meet.brevo.com/florian-hohenleitner/connection-relationships?utm_campaign=connection-relationships&utm_source=website&utm_medium=discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#6b7a40] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Dein Entdeckungsgespräch buchen
          </a>
        </div>
      </section>
    </main>
  );
}
