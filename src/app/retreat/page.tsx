import { Metadata } from 'next';
import Image from 'next/image';
import RetreatInterestForm from '../../components/RetreatInterestForm';

export const metadata: Metadata = {
  title: 'The Connection Retreat — Florian Hohenleitner',
  description: 'A transformational, experience-based retreat designed to help people reconnect — with themselves, with a group, and with another person. Grounded in embodied practice, the Five Elements, and the belief that real human connection is worth creating space for.',
};

const elements = [
  {
    symbol: '🜃',
    name: 'Earth',
    color: 'bg-amber-50 border-amber-200',
    nameColor: 'text-amber-800',
    themes: 'Grounding · Safety · Embodiment · Self-connection',
  },
  {
    symbol: '🜄',
    name: 'Water',
    color: 'bg-blue-50 border-blue-200',
    nameColor: 'text-blue-800',
    themes: 'Emotional flow · Openness · Group connection',
  },
  {
    symbol: '🜂',
    name: 'Fire',
    color: 'bg-red-50 border-red-200',
    nameColor: 'text-red-800',
    themes: 'Intimacy · Courage · Transformation',
  },
  {
    symbol: '🜁',
    name: 'Air',
    color: 'bg-sky-50 border-sky-200',
    nameColor: 'text-sky-800',
    themes: 'Expression · Play · Vulnerability',
  },
  {
    symbol: '◎',
    name: 'Space',
    color: 'bg-violet-50 border-violet-200',
    nameColor: 'text-violet-800',
    themes: 'Stillness · Spirituality · Universal connection',
  },
];

const practices = [
  'Yoga', 'Breathwork', 'Tantra', 'Authentic relating',
  'Dance & movement', 'Acroyoga', 'Meditation', 'Thai massage', 'Playfulness & connection exercises',
];

export default function RetreatPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero — full-bleed image with overlay */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1525776658211-37bdb8a0b32b?q=80&w=1740&auto=format&fit=crop"
          alt="People gathered together at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24 text-white">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-4 font-medium">The Connection Retreat</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            We are more disconnected than ever.
          </h1>
          <p className="text-base sm:text-xl text-white/80 leading-relaxed max-w-xl">
            From ourselves. From the people around us. From genuine presence in our own lives. This retreat exists to change that.
          </p>
        </div>
      </section>

      {/* Quote — section divider */}
      <section className="py-16 sm:py-20 bg-ink">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <p className="font-heading font-bold text-2xl sm:text-4xl text-white leading-snug">
            &ldquo;Something in you already knows.&rdquo;
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 bg-sand/30">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 md:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop"
              alt="Friends with arms around each other watching the sunset together"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-5 text-ink">What it is</h2>
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed mb-5">
              A transformational, experience-based retreat designed to help people reconnect on three levels:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Connection with self',
                'Connection with the group',
                'Deep connection with another person',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-ink/60 leading-relaxed">
              Not a rigid schedule — a living, modular experience built from workshops, rituals, games, and embodied practices that shift to create something unique every time.
            </p>
          </div>
        </div>
      </section>

      {/* Five Elements */}
      <section className="py-20 border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-ink">The Five Elements</h2>
          <p className="text-base text-ink/60 leading-relaxed mb-10">
            The creative framework that shapes everything — workshop themes, emotional journeys, partner exercises, visual identity, and the atmosphere of the space.
          </p>
          <div className="space-y-3">
            {elements.map((el) => (
              <div key={el.name} className={`rounded-xl border p-5 ${el.color}`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">{el.symbol}</span>
                  <span className={`font-heading font-bold text-lg ${el.nameColor}`}>{el.name}</span>
                </div>
                <p className="text-sm text-ink/60">{el.themes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices — image + tags */}
      <section className="py-20 bg-sand/30 border-t border-ink/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-5 text-ink">What you&apos;ll move through</h2>
            <p className="text-base text-ink/60 leading-relaxed mb-8">
              The retreat draws from embodied and relational practices — combined in ways that feel intentional, not prescriptive.
            </p>
            <div className="flex flex-wrap gap-2">
              {practices.map((p) => (
                <span
                  key={p}
                  className="bg-white border border-ink/10 text-ink/70 text-sm rounded-full px-4 py-1.5 shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-72 md:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1200&auto=format&fit=crop"
              alt="A group's hands resting together on a fallen tree branch in a forest"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy — full-width atmospheric image + quote */}
      <section className="relative py-32">
        <Image
          src="https://images.unsplash.com/photo-1551345021-fa29e6451e45?q=80&w=1600&auto=format&fit=crop"
          alt="Silhouette of a group sitting together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">Less teaching. More being.</h2>
          <p className="text-base sm:text-xl text-white/80 leading-relaxed mb-4">
            The goal isn&apos;t to hand you a framework or a set of tools. It&apos;s to create conditions — beautiful, safe, held conditions — where something real can happen.
          </p>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed italic">
            Authenticity. Vulnerability. Play. Intimacy. Presence. Shared human experience.
          </p>
        </div>
      </section>

      {/* Sign up */}
      <section className="py-24 bg-sand/30">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 text-center">
            <p className="text-xs uppercase tracking-widest text-ink/40 mb-3 font-medium">It&apos;s not ready yet</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-ink">
              Get on the list
            </h2>
            <p className="text-ink/60 text-sm sm:text-base mb-8">
              No spam. Just a heads-up when dates, location, and details are confirmed.
            </p>
            <RetreatInterestForm />
          </div>
        </div>
      </section>

    </main>
  );
}
