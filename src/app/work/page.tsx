import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work with Flo — Web, Booking & Tools for Retreat Organizers',
  description:
    'I build websites, booking flows, and event tools for retreat organizers. As someone who organizes retreats myself, I understand the problems from the inside.',
};

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="5" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 27h10M16 23v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 11h16M8 15.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Retreat Website',
    body: 'Everything your retreat needs online — in one complete build. A clean, fast site that explains your offering, shows your schedule, and converts visitors into bookings.',
    includes: [
      'Custom design matched to your brand',
      'Mobile-first, SEO-ready',
      'Booking or inquiry integration',
      'Event schedule — teachers, sessions, filtering',
      'Teacher profiles & session pages',
      'Delivered in 2–3 weeks',
    ],
    deliveryNote: 'Design, build, copy, schedule. Ready in 2–3 weeks.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 13a3 3 0 000 6v4h24v-4a3 3 0 000-6V9H4v4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M13 9v14" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2.5 2.5" />
      </svg>
    ),
    title: 'Booking & Launch Setup',
    body: 'The website gets you found — this gets you booked. Everything that turns visitors into confirmed attendees, set up and running before you open registration.',
    includes: [
      'Ticketing & payment flow setup (WeTravel, Stripe)',
      'Email marketing setup & campaigns (early bird sequences, past-attendee reactivation via MailerLite)',
      'Waitlist & inquiry capture',
      'Event schedule setup',
      'Launch timeline support',
    ],
    deliveryNote: 'Ticketing, email sequences, and schedule — ready before you open registration.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 10l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 20h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="3" y="3" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Custom Tools',
    body: 'Something your attendees do before, during, or after your retreat — built as a standalone interactive experience.',
    includes: [
      'Pre-retreat intake or discovery tools',
      'AI-powered reflection or assessment',
      'Waitlist & email capture flows',
      'Community portals or dashboards',
      'Scoped per project — ask what\'s feasible',
    ],
    deliveryNote: 'Tell me what you need. I\'ll tell you what\'s realistic.',
  },
];

const projects = [
  {
    tag: 'SaaS Tool · Event Tech',
    title: 'FlowGrid',
    desc: 'Retreat and festival organizers were managing schedules in spreadsheets that broke on mobile and PDFs nobody could update. FlowGrid is a retreat management system and event scheduling platform — drag-and-drop session builder, attendee-facing mobile schedule, teacher profiles, analytics. Built from scratch.',
    pills: ['Next.js', 'Supabase', 'Stripe', 'Full-stack'],
    href: 'https://tryflowgrid.com',
  },
  {
    tag: 'Event Website · Launch Campaign',
    title: 'Mediterranean Acro Convention',
    desc: 'Complete brand system and event website for one of Europe\'s longest-running acroyoga conventions in Malta — which I also organize. Logo suite, color palette, typography, voice guide, and web presence built to scale across multiple editions.',
    pills: ['Email Marketing', 'Web Design', 'Event Identity'],
    href: 'https://www.acrointhesun.com',
  },
  {
    tag: 'Web App · Brand Direction',
    title: 'Life Stories',
    desc: 'A digital memory book platform for preserving life stories and wisdom across generations. Designed for warmth and emotional resonance — for an audience that needs technology to feel approachable, not clinical.',
    pills: ['Web App', 'Next.js', 'Brand Direction'],
    href: 'https://lifestories.love',
  },
];

const whyItems = [
  {
    num: '01',
    title: 'I organize retreats myself',
    body: 'I run events across Europe and Southeast Asia. I know what breaks at 11pm before day one and what your attendees actually need.',
  },
  {
    num: '02',
    title: 'Design, code, and copy — one person',
    body: 'Nothing gets lost in handoff. You brief me once and get a complete result, not three freelancers arguing over scope.',
  },
  {
    num: '03',
    title: 'Fast turnaround',
    body: 'A full retreat website from first call to live: typically 2–3 weeks. You plan the retreat, I\'ll handle the online side.',
  },
  {
    num: '04',
    title: 'You own everything',
    body: 'Clean code, documented systems, no vendor lock-in. When we\'re done, you can hand it to anyone.',
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-sand">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-brand mb-6">
          Web, Booking &amp; Tools for Retreat Organizers
        </p>
        <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-ink mb-8">
          Your retreat deserves<br />
          a home <em className="not-italic text-brand">online.</em>
        </h1>
        <p className="text-ink/70 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
          I build websites, booking flows, and event tools for retreat organizers.
          As someone who organizes retreats myself, I understand the problems from the inside — and I build accordingly.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="mailto:hello@florianhohenleitner.com"
            className="bg-brand text-white font-bold rounded px-6 py-3 text-sm shadow hover:bg-brand/90 transition"
          >
            Let's talk
          </a>
          <a
            href="#work"
            className="text-sm text-ink/50 hover:text-ink transition flex items-center gap-1"
          >
            See the work <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <div className="border-t border-ink/8 max-w-4xl mx-auto" />

      {/* SERVICES */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-brand mb-4">What I offer</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink leading-tight">
              Everything your online presence needs.
            </h2>
          </div>
          <p className="text-ink/60 leading-relaxed">
            One person handles design, development, and copy — so nothing gets lost in handoff
            and you're not managing three different freelancers for one website.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/8 border border-ink/8 rounded-xl overflow-hidden">
          {services.map((s) => (
            <div key={s.title} className="bg-sand p-8 hover:bg-white transition-colors">
              <div className="text-brand mb-5">{s.icon}</div>
              <h3 className="font-heading font-bold text-xl text-ink mb-3">{s.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed mb-5">{s.body}</p>
              <ul className="flex flex-col gap-2">
                {s.includes.map((item) => (
                  <li key={item} className="text-xs text-ink/50 pl-4 relative">
                    <span className="absolute left-0 text-accent">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Delivery notes + single CTA — every project is scoped and quoted individually */}
        <div className="mt-8 bg-white border border-ink/8 rounded-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {services.map((s) => (
              <div key={s.title} className="border-l-2 border-accent pl-4">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink/40 mb-2 min-h-[2.5rem]">{s.title}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{s.deliveryNote}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-ink/8 pt-8 text-center">
            <p className="text-ink/60 text-sm leading-relaxed mb-5 max-w-md mx-auto">
              Every project is scoped individually — send me a few details and I&apos;ll tell you honestly what it takes.
            </p>
            <a
              href="mailto:hello@florianhohenleitner.com"
              className="inline-block bg-brand text-white font-bold rounded px-6 py-3 text-sm shadow hover:bg-brand/90 transition"
            >
              Get a quote
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-ink/8 max-w-4xl mx-auto" />

      {/* WORK */}
      <section id="work" className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-brand mb-4">Selected Work</p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-12">Built for the retreat world.</h2>

        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start bg-white border border-ink/8 rounded-xl p-8 hover:border-brand/40 hover:shadow-md transition-all"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand mb-2">{p.tag}</p>
                <h3 className="font-heading font-bold text-2xl text-ink mb-3 leading-tight">{p.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed max-w-lg mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[10px] font-semibold tracking-widest uppercase text-ink/50 bg-ink/5 px-2 py-1 rounded"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-brand/30 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xl hidden sm:block">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="border-t border-ink/8 max-w-4xl mx-auto" />

      {/* WHY FLO */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-brand mb-4">Why work with me</p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-12 leading-tight">
          The perspective you don't<br className="hidden sm:block" /> get from an agency.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyItems.map((item) => (
            <div
              key={item.num}
              className="pl-5 border-l-2 border-transparent hover:border-accent transition-colors"
            >
              <p className="font-heading text-3xl font-light text-ink/20 mb-3">{item.num}</p>
              <h4 className="font-semibold text-sm text-ink mb-2">{item.title}</h4>
              <p className="text-xs text-ink/60 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-ink/8 max-w-4xl mx-auto" />

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-brand mb-4">Get in touch</p>
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink mb-6 leading-tight">
          Tell me about your retreat.
        </h2>
        <p className="text-ink/60 max-w-md mx-auto leading-relaxed mb-10">
          What you run, what's not working, what's coming next.
          I'll tell you honestly whether I can help and what it would cost.
        </p>
        <a
          href="mailto:hello@florianhohenleitner.com"
          className="inline-block bg-brand text-white font-bold rounded px-8 py-4 shadow hover:bg-brand/90 transition"
        >
          Send me a message
        </a>
        <p className="mt-5 text-sm text-ink/40">
          or{' '}
          <a href="mailto:hello@florianhohenleitner.com" className="text-brand hover:underline">
            hello@florianhohenleitner.com
          </a>
        </p>
      </section>

    </main>
  );
}
