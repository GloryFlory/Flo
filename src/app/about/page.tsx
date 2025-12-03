export default function About() {
  return (
    <main className="min-h-screen bg-sand">
      <section className="section py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-heading font-bold mb-8 text-center text-ink">
            Hi, I'm Flo.
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <img
              src="/about.jpg"
              alt="Florian Hohenleitner"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            
            <div className="space-y-6">
              <p className="text-lg text-ink leading-relaxed">
                At my core, I'm someone who loves to grow, connect, and share. Whether it's through my podcast, retreats, creative projects, or simply the conversations I have with people, my deepest motivation is to support others on their journey—helping them feel seen, inspired, and more connected to themselves and those around them.
              </p>
              
              <p className="text-lg text-ink leading-relaxed">
                What drives me is the belief that growth doesn't have to be lonely. When we show up with openness and vulnerability, we create spaces where real transformation can happen. Following my heart has led me onto a path that isn't always the easiest or most secure, but it's the one that feels true.
              </p>
            </div>
          </div>

          {/* My Journey Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink">
              My Journey So Far
            </h2>
            <div className="space-y-4 text-lg text-ink leading-relaxed">
              <p>
                I spent years working in the corporate world, specializing in compliance and finance. While it gave me stability, I realized it wasn't aligned with my deeper purpose.
              </p>
              <p>
                In 2023, I stepped away to follow my heart—traveling across Asia, immersing myself in new cultures, and dedicating myself to self-discovery.
              </p>
              <p>
                Along the way, I trained as a Yoga Teacher in Bali, became a Thai Massage Practitioner in Chiang Mai, and explored countless practices in mindfulness, embodiment, and personal growth.
              </p>
              <p>
                I co-organize the Mediterranean Acro Convention (MAC), bringing together people from all over the world to share movement, connection, and community.
              </p>
              <p>
                I launched the Grow with the Flo Podcast, a space for honest conversations about growth, vulnerability, and living a life true to yourself.
              </p>
              <p>
                And, because I love experimenting, I've dipped my toes into climbing, padel, improv comedy, Acroyoga, and more—embracing the idea of being a curious "jack of all trades."
              </p>
            </div>
          </div>
          
          {/* What I Do Now Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink">
              What I Do Now
            </h2>
            <p className="text-lg text-ink leading-relaxed mb-6">
              Today, I combine these experiences into a creative mix of projects:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🎙️</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">Podcast Host</h3>
                  <p className="text-ink/80">Hosting the Grow with the Flo podcast</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🏔️</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">Event Organizer</h3>
                  <p className="text-ink/80">Organizing retreats and festivals around growth, movement, and connection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">💭</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">App Creator</h3>
                  <p className="text-ink/80">Creating tools like Fluffy Prompts—a journaling and reflection app for individuals and couples</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">💪</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink mb-1">Coach & Guide</h3>
                  <p className="text-ink/80">Coaching and guiding others who want to grow while staying true to themselves</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I Believe Section */}
          <div className="bg-gradient-to-br from-brand/10 to-accent/10 rounded-xl p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink text-center">
              What I Believe
            </h2>
            <div className="space-y-4 text-lg text-ink leading-relaxed text-center max-w-3xl mx-auto">
              <p className="font-medium">Growth is messy, but it's also beautiful.</p>
              <p className="font-medium">Vulnerability is not weakness—it's the door to connection.</p>
              <p className="font-medium">Life is too short to follow a script that doesn't feel true.</p>
              <p className="mt-6">
                I don't claim to have all the answers. I see myself as a fellow traveler, walking the same path, making mistakes, learning, and sharing along the way. My hope is that through what I create, you find inspiration, tools, and maybe a spark that helps you on your own journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
