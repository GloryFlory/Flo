export default function About() {
  return (
    <main className="min-h-screen bg-sand">
      <section className="section py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-heading font-bold mb-8 text-center text-ink">
            Hi, ich bin Flo.
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <img
              src="/about.jpg"
              alt="Florian Hohenleitner"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            
            <div className="space-y-6">
              <p className="text-lg text-ink leading-relaxed">
                Im Kern bin ich jemand, der es liebt zu wachsen, sich zu verbinden und zu teilen. Ob durch meinen Podcast, Retreats, kreative Projekte oder einfach die Gespräche, die ich mit Menschen führe, meine tiefste Motivation ist es, andere auf ihrer Reise zu unterstützen – ihnen zu helfen, sich gesehen, inspiriert und mehr mit sich selbst und denen um sie herum verbunden zu fühlen.
              </p>
              
              <p className="text-lg text-ink leading-relaxed">
                Was mich antreibt, ist der Glaube, dass Wachstum nicht einsam sein muss. Wenn wir uns mit Offenheit und Verletzlichkeit zeigen, schaffen wir Räume, in denen echte Transformation geschehen kann. Meinem Herzen zu folgen hat mich auf einen Weg geführt, der nicht immer der einfachste oder sicherste ist, aber es ist der, der sich wahr anfühlt.
              </p>
            </div>
          </div>

          {/* My Journey Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink">
              Meine Reise bisher
            </h2>
            <div className="space-y-4 text-lg text-ink leading-relaxed">
              <p>
                Ich verbrachte Jahre in der Unternehmenswelt und spezialisierte mich auf Compliance und Finanzen. Obwohl es mir Stabilität gab, erkannte ich, dass es nicht mit meinem tieferen Zweck übereinstimmte.
              </p>
              <p>
                2023 trat ich zurück, um meinem Herzen zu folgen – reiste durch Asien, tauchte in neue Kulturen ein und widmete mich der Selbstfindung.
              </p>
              <p>
                Unterwegs absolvierte ich eine Yoga-Lehrer-Ausbildung in Bali, wurde Thai-Massage-Praktiker in Chiang Mai und erforschte unzählige Praktiken in Achtsamkeit, Verkörperung und persönlichem Wachstum.
              </p>
              <p>
                Ich organisiere mit die Mediterranean Acro Convention (MAC) und bringe Menschen aus aller Welt zusammen, um Bewegung, Verbindung und Gemeinschaft zu teilen.
              </p>
              <p>
                Ich startete den Grow with the Flo Podcast, einen Raum für ehrliche Gespräche über Wachstum, Verletzlichkeit und ein Leben in Wahrheit zu sich selbst.
              </p>
              <p>
                Und weil ich es liebe zu experimentieren, habe ich mich ins Klettern, Padel, Improvisations-Comedy, Acroyoga und mehr hineingewagt – ich umarme die Idee, ein neugieriger "Tausendsassa" zu sein.
              </p>
            </div>
          </div>
          
          {/* What I Do Now Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink">
              Was ich jetzt mache
            </h2>
            <p className="text-lg text-ink leading-relaxed mb-6">
              Heute verbinde ich diese Erfahrungen zu einer kreativen Mischung von Projekten:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🎙️</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">Podcast Host</h3>
                  <p className="text-ink/80">Moderiere den Grow with the Flo Podcast</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🏔️</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">Event Organisator</h3>
                  <p className="text-ink/80">Organisiere Retreats und Festivals rund um Wachstum, Bewegung und Verbindung</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">💭</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">App Entwickler</h3>
                  <p className="text-ink/80">Erstelle Tools wie Fluffy Prompts – eine Journaling- und Reflexions-App für Einzelpersonen und Paare</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">💪</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">Coach & Guide</h3>
                  <p className="text-ink/80">Coache und begleite andere, die wachsen wollen, während sie sich selbst treu bleiben</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I Believe Section */}
          <div className="bg-gradient-to-br from-brand/10 to-accent/10 rounded-xl p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink text-center">
              Woran ich glaube
            </h2>
            <div className="space-y-4 text-lg text-ink leading-relaxed text-center max-w-3xl mx-auto">
              <p className="font-medium">Wachstum ist chaotisch, aber es ist auch schön.</p>
              <p className="font-medium">Verletzlichkeit ist keine Schwäche – sie ist die Tür zur Verbindung.</p>
              <p className="font-medium">Das Leben ist zu kurz, um einem Drehbuch zu folgen, das sich nicht wahr anfühlt.</p>
              <p className="mt-6">
                Ich behaupte nicht, alle Antworten zu haben. Ich sehe mich als Mitreisenden, der denselben Weg geht, Fehler macht, lernt und unterwegs teilt. Meine Hoffnung ist, dass du durch das, was ich schaffe, Inspiration, Werkzeuge und vielleicht einen Funken findest, der dir auf deiner eigenen Reise hilft.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
