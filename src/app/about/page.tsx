import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florian Hohenleitner — About',
  description: 'I quit a well-paying corporate career and have been rebuilding from scratch ever since. This is the honest version of that story.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-sand">
      <section className="section py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-heading font-bold mb-8 text-center text-ink">
            Hi, I&apos;m Flo.
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <img
              src="/about.jpg"
              alt="Florian Hohenleitner"
              className="w-full h-auto rounded-xl shadow-lg"
            />

            <div className="space-y-6">
              <p className="text-lg text-ink leading-relaxed">
                I spent years in the corporate world &mdash; Head of Compliance in the iGaming industry. Good money, stable career, clear identity. In 2023 I walked away from all of it.
              </p>
              <p className="text-lg text-ink leading-relaxed">
                What followed was messier than I expected. I travelled through Asia, trained as a yoga teacher in Bali, became a Thai massage practitioner in Chiang Mai, organised a festival in Malta, launched a podcast, built some software, and tried a lot of things to figure out what I actually wanted to do with my life.
              </p>
              <p className="text-lg text-ink leading-relaxed">
                I&apos;m still figuring it out. That&apos;s kind of the whole point.
              </p>
              <p className="text-lg text-ink leading-relaxed">
                What I know is this: I care deeply about human connection. Not the surface kind &mdash; the kind that happens when people feel genuinely safe to be themselves. I&apos;ve spent most of my adult life creating spaces for that &mdash; through festivals, events, Acroyoga communities, and now through a retreat I&apos;m slowly building.
              </p>
              <p className="text-lg text-ink leading-relaxed">
                I also host a podcast called <em>Grow with the Flo</em>, where I share what&apos;s actually going on &mdash; the anxiety, the uncertainty, the occasional breakthrough. It started as a way to hold myself accountable. It turned into something I genuinely love.
              </p>
              <p className="text-lg text-ink leading-relaxed">
                I&apos;m currently based in H&#7897;i An, Vietnam. I do breathwork every morning, most mornings. I move my body, write sometimes, and try to spend time with people who make me feel alive.
              </p>
              <p className="text-lg text-ink leading-relaxed font-medium">
                If you want the highlight reel version of this story, you&apos;re probably in the wrong place. If you want the honest one &mdash; welcome.
              </p>
            </div>
          </div>

          {/* My Journey So Far */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink">
              My Journey So Far
            </h2>
            <div className="space-y-4 text-lg text-ink leading-relaxed">
              <p>
                I spent years working in the corporate world, specialising in compliance and finance. While it gave me stability, I realised it wasn&apos;t aligned with my deeper purpose.
              </p>
              <p>
                In 2023, I stepped away to follow my heart &mdash; travelling across Asia, immersing myself in new cultures, and dedicating myself to self-discovery.
              </p>
              <p>
                Along the way, I trained as a yoga teacher in Bali, became a Thai massage practitioner in Chiang Mai, and explored countless practices in mindfulness, embodiment, and personal growth.
              </p>
              <p>
                I co-organise the Mediterranean Acro Convention (MAC), bringing together people from all over the world to share movement, connection, and community.
              </p>
              <p>
                I launched the Grow with the Flo Podcast &mdash; a space for honest conversations about growth, vulnerability, and living a life true to yourself.
              </p>
              <p>
                And because I love experimenting, I&apos;ve dipped my toes into climbing, padel, improv comedy, Acroyoga, and more &mdash; embracing the idea of being a curious jack of all trades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
