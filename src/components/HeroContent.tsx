'use client';

import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

// The headline slides up from behind a clip boundary — the "line reveal"
// used on high-end sites. Wrap the element in overflow-hidden to see the effect.
const lineReveal: Variants = {
  hidden: { y: '110%' },
  show: {
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* overflow-hidden is what makes the line reveal work */}
      <div className="overflow-hidden mb-8 px-4">
        <motion.h1
          className="text-white font-heading font-extrabold text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-none drop-shadow-lg"
          variants={lineReveal}
        >
          I'm Flo.
        </motion.h1>
      </div>
      <motion.a
        href="/podcast"
        className="bg-brand text-white font-bold rounded px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 shadow hover:bg-brand/90 transition-colors mx-4"
        variants={fadeUp}
      >
        Listen to Grow with the Flo
      </motion.a>
      <motion.div
        className="flex justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 lg:mb-20 px-4"
        variants={fadeUp}
      >
        <a
          href="https://www.youtube.com/@GrowWithTheFloPodcast"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          className="hover:opacity-80"
        >
          <img src="/youtube.png" alt="YouTube" width={32} height={32} className="w-8 h-8 sm:w-9 sm:h-9" />
        </a>
        <a
          href="https://www.instagram.com/grow.with_the.flo/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          className="hover:opacity-80"
        >
          <img src="/instagram.png" alt="Instagram" width={32} height={32} className="w-8 h-8 sm:w-9 sm:h-9" />
        </a>
      </motion.div>
    </motion.div>
  );
}
