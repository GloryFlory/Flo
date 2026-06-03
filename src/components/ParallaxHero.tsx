'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

export default function ParallaxHero({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Move image up by 25% of the section height as you scroll — slower than the page
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden py-16 sm:py-20 px-4"
    >
      <motion.img
        src="/header.jpg"
        alt="Header"
        className="absolute inset-0 w-full h-[115%] object-cover object-top opacity-60 pointer-events-none"
        style={{ y, zIndex: 0 }}
      />
      {/* Slow drifting gradient wash — adds life behind the hero without distraction */}
      <div
        aria-hidden
        className="hero-drift absolute inset-0 pointer-events-none mix-blend-soft-light opacity-70"
        style={{ zIndex: 1 }}
      />
      {children}
    </section>
  );
}
