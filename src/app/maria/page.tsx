'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import MariaPhotoWall from '../../components/MariaPhotoWall';
import MariaBackground from '../../components/MariaBackground';

const memories = [
  { date: 'June 2022', title: 'Where it began', description: 'We met during an Acroyoga class — and kept jamming together after.' },
  { date: 'August 2022', title: 'A quiet crush', description: 'The moment I realised this was more than friendship.' },
  { date: 'September 2022', title: 'Bachata, and a thousand ideas', description: 'We started dancing Bachata together — and dreamed up shubladchata, acrobachata, ukulele jams, guitar sessions… everything.' },
  { date: 'September 2022', title: 'Zouk', description: 'You inspired me to start Zouk.' },
  { date: 'November 2022', title: 'Lindy Hop', description: 'Another dance, another rhythm together.' },
  { date: 'November 2022', title: 'The Tiramisu showdown', description: 'A serious competition. You won. Fair and square.' },
  { date: 'February 2023', title: 'West Coast Swing & a confession', description: 'We started a choreography together. On Feb 11th we recorded our routine, then went for a long walk — and I told you. I didn\'t quite know what it was, only that I needed you to know how special our connection had become, and how much you meant to me. Then I flew to South East Asia.' },
  { date: 'August 2023', title: 'Tagliaferro Tower coffees', description: 'I started working there and our coffee breaks became the best part of every day.' },
  { date: 'August 6, 2023', title: 'Brezen, Weißwurscht & "Fluffy"', description: 'Your first Bavarian breakfast. The word "fluffy" entered our private language. More Tiramisu was made.' },
  { date: 'September 2023', title: 'Summerdream Acro Fest', description: 'Our first Acro trip together — and one of the most magical weeks of my life. One night we went skinny dipping. Another, we took those beautifully aesthetic nude acro photos. And on the third, under a blanket on the beach, we got physically close for the first time.' },
  { date: 'October 2023', title: 'Teaching together in Malta', description: 'Our first Acroyoga workshop as a duo. The start of Tantra together — exploring vulnerability and intimacy in a way I had never known.' },
  { date: 'November 2023', title: 'The MAC was born', description: 'The dream for the Mediterranean Acro Convention took shape — partly because we wanted an excuse to build something together.' },
  { date: 'December 2023', title: 'The first time', description: 'The energy had been building for months. When it finally happened, it was unlike anything I\'d ever felt. I\'ll never forget you saying: “I want you inside of me.”' },
  { date: 'March 2024', title: 'Koh Phangan', description: 'Three weeks of fiery, open, unrestrained love.' },
  { date: 'March 2024', title: 'Zouk Island & Samma Karuna', description: 'A week at the Zouk Island Festival, followed by a Tantra retreat at Samma Karuna. We went deeper into each other than ever.' },
  { date: 'March 2024', title: 'The board game era (brief)', description: 'Our first and last serious board game session. From then on: Monopoly Deal only.' },
  { date: 'April 1, 2024', title: 'Stay Fit and Sexy Challenge', description: 'Born on April Fool\'s — but very much not a joke. Daily videos to each other ever since: workouts on your end, occasional shower clips on mine.' },
  { date: 'September 2024', title: 'Cinque Terre & Summerdream 2', description: 'You worked remotely to make it happen. A trip through Cinque Terre, a hotel with mirrors on the ceiling, and a fest we couldn\'t resist sneaking off from.' },
  { date: 'September 2024', title: 'Bologna', description: 'A very sexy hotel room. The perfect ending to that trip.' },
  { date: 'October 2024', title: 'The first MAC', description: 'We hosted it together. The dream became real.' },
  { date: 'November 2024', title: 'More teaching', description: 'More Acroyoga workshops, more partnership.' },
  { date: 'December 2024', title: 'Flo quits his job', description: 'The first leap.' },
  { date: 'January 10, 2025', title: 'Maria quits her job', description: 'The second leap. We celebrated with a very special dinner at ION Harbour.' },
  { date: 'February 2025', title: 'Coffee Circus tour', description: 'A self-appointed mission to explore every Coffee Circus across Malta.' },
  { date: 'February 2025', title: 'Maria leaves Malta', description: 'A new chapter begins.' },
  { date: 'March 2025', title: 'Reunited at Jungle Prana', description: 'We met again in Bali and travelled together for a while. My birthday on March 6th at Aurora Cabins — one of the most beautiful places I\'ve ever stayed — and I got to spend it with you.' },
  { date: 'March 2025', title: 'Vietnam', description: 'Travelling together through Vietnam.' },
  { date: 'May 2025', title: 'Chiang Mai reunion', description: 'India had gotten complicated, so you came to Thailand. I tried to surprise you at the airport — and went to the wrong terminal. You walked through unseen and texted me from the hotel. We laughed about it. Then we were together again.' },
  { date: 'May 2025', title: 'Wat Pa Tam Wua', description: 'Chiang Rai, Pai, and then Wat Pa Tam Wua — our first meditation experience together.' },
  { date: 'June 2025', title: 'Goodbye, for now', description: 'You continued to India and Nepal. I had to let you go.' },
  { date: 'September 8, 2025', title: 'Reunited in Malta', description: 'Back where it began. You lived at mine for a week. We went to the gym almost every day, met in the mornings for a swim, a meditation, a yoga session, or just breakfast. One of the most beautiful weeks of us.' },
  { date: 'October 2025', title: 'MAC 2.0', description: 'The second edition. So much bigger. So much more alive. An incredible experience.' },
  { date: 'End of October 2025', title: 'Goodbye again', description: 'I flew to the UK first; you\'d leave for Sri Lanka a week later. So I was the one saying goodbye. At the airport, for the first time, you told me you loved me.' },
  { date: 'November 1, 2025', title: 'A secret plan', description: 'I decided to surprise you for New Year\'s Eve. Booked a flight to Sri Lanka.' },
  { date: 'December 31, 2025', title: 'Sri Lanka surprise', description: 'We reunited and spent two months together.' },
  { date: 'January 2026', title: 'Hospital week', description: 'You got sick and spent a week in the hospital. I became a nurse and an AI-assisted expert in antibiotics. We got through it.' },
  { date: 'February 2026', title: 'Different paths, again', description: 'You went to India. I went to Bali and Vietnam.' },
  { date: 'May 2026', title: 'Vipassana, together-apart', description: 'You did a Vipassana retreat — and inspired me to do one at the same time.' },
  { date: 'June 8, 2026', title: 'Kuala Lumpur', description: 'Reunited after four months apart — the longest we\'ve ever been. The next chapter starts here.' },
];

const surprises = [
  {
    title: 'What I Carry Back to You',
    description: 'Written from silence — a letter from the Vipassana, in five elements. For the days before we meet again.',
    link: '/maria/reunion.html',
  },
  {
    title: 'Our Journey — Kuala Lumpur, Bali, Sumba',
    description: 'Ten days of presence, passion, and play. The plan, the dream, the countdown.',
    link: '/maria/journey.html',
  },
  {
    title: 'Fluffy Advent Calendar',
    description: '24 doors. 24 little things I wanted you to know.',
    link: 'https://fluffy-advent-calendar.vercel.app/',
  },
  {
    title: 'Fluffy Prompts',
    description: 'Daily prompts to invite a deeper journey inwards — and a space to reflect.',
    link: 'https://fluffy-prompts.vercel.app/',
  },
  {
    title: 'Map of Love',
    description: 'Every place that means something. Every dot is a memory.',
    link: 'https://map-of-love.vercel.app/',
  },
];

export default function MariaPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white relative">
      <MariaBackground />
      <div className="relative z-10">

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative z-10"
        >
          <p className="text-white/30 text-xs tracking-[0.4em] uppercase mb-6">Only for you</p>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-5xl sm:text-7xl font-light tracking-tight"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
              Maria
            </motion.h1>
          </div>
          <motion.p
            className="text-white/40 text-base sm:text-lg font-light max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A little corner of the internet I built for you.
            A place for memories, surprises, and everything in between.
          </motion.p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-white/20 origin-top"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* Surprises */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-3">Things I made for you</p>
            <h2 className="text-3xl font-light mb-12">Surprises</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-6">
            {surprises.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/card block bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-rose-300/30 rounded-2xl p-6 transition-[background-color,border-color,transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(244,114,182,0.25)]"
                  >
                    <SurpriseCard item={item} linked />
                  </a>
                ) : (
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-6">
                    <SurpriseCard item={item} linked={false} />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Memories */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-3">Our story</p>
            <h2 className="text-3xl font-light mb-12">Moments</h2>
          </AnimatedSection>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <div className="flex flex-col gap-10 pl-14">
              {memories.map((memory, i) => (
                <AnimatedSection key={i} delay={(i % 4) * 0.06}>
                  <div className="relative">
                    <div className="absolute -left-10 top-1 w-3 h-3 rounded-full bg-rose-400/60 border border-rose-400/30" />
                    <p className="text-white/25 text-xs tracking-widest uppercase mb-1">{memory.date}</p>
                    <h3 className="text-white text-lg font-light mb-1">{memory.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{memory.description}</p>
                  </div>
                </AnimatedSection>
              ))}
              {/* Placeholder for future memories */}
              <AnimatedSection>
                <div className="relative opacity-30">
                  <div className="absolute -left-10 top-1 w-3 h-3 rounded-full border border-white/20" />
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-1">To be written</p>
                  <p className="text-white/30 text-sm italic">More to come...</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Photo wall */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-3">Frozen moments</p>
            <h2 className="text-3xl font-light mb-12">Photos</h2>
          </AnimatedSection>
          <MariaPhotoWall />
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 px-6 text-center">
        <AnimatedSection>
          <p className="text-white/15 text-sm tracking-wide">Made for you. With everything.</p>
        </AnimatedSection>
      </section>

      </div>
    </div>
  );
}

function SurpriseCard({ item, linked }: { item: typeof surprises[0]; linked: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-white font-light text-lg transition-colors duration-300 group-hover/card:text-rose-200">{item.title}</h3>
        {linked && (
          <span className="text-white/30 text-xs tracking-widest transition-all duration-300 group-hover/card:text-rose-300/80 group-hover/card:translate-x-0.5 inline-block">↗</span>
        )}
      </div>
      <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
}
