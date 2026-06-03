'use client';

import { motion } from 'framer-motion';

/**
 * Animated paw print. The paw "draws itself" on mount via SVG stroke-dasharray,
 * then settles into a gentle floating loop.
 */
export default function PawPrint() {
  return (
    <motion.div
      className="flex justify-center mb-8"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="pawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fda4af" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Main pad — pear/heart shape */}
        <motion.path
          d="M32 52 C20 52, 14 42, 18 33 C21 26, 27 24, 32 24 C37 24, 43 26, 46 33 C50 42, 44 52, 32 52 Z"
          stroke="url(#pawGradient)"
          strokeWidth="1.5"
          fill="url(#pawGradient)"
          fillOpacity="0"
          variants={{
            hidden: { pathLength: 0, fillOpacity: 0 },
            visible: {
              pathLength: 1,
              fillOpacity: 0.25,
              transition: {
                pathLength: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
                fillOpacity: { duration: 0.8, delay: 0.9 },
              },
            },
          }}
        />

        {/* Toe pads — four ovals around the top */}
        {[
          { cx: 16, cy: 24, rx: 4, ry: 5, delay: 0.4 },
          { cx: 26, cy: 17, rx: 3.5, ry: 5, delay: 0.55 },
          { cx: 38, cy: 17, rx: 3.5, ry: 5, delay: 0.7 },
          { cx: 48, cy: 24, rx: 4, ry: 5, delay: 0.85 },
        ].map((toe, i) => (
          <motion.ellipse
            key={i}
            cx={toe.cx}
            cy={toe.cy}
            rx={toe.rx}
            ry={toe.ry}
            stroke="url(#pawGradient)"
            strokeWidth="1.5"
            fill="url(#pawGradient)"
            fillOpacity="0"
            variants={{
              hidden: { pathLength: 0, fillOpacity: 0, scale: 0.6 },
              visible: {
                pathLength: 1,
                fillOpacity: 0.25,
                scale: 1,
                transition: {
                  pathLength: { duration: 0.7, delay: toe.delay, ease: [0.16, 1, 0.3, 1] as const },
                  fillOpacity: { duration: 0.5, delay: toe.delay + 0.6 },
                  scale: { duration: 0.7, delay: toe.delay, ease: [0.16, 1, 0.3, 1] as const },
                },
              },
            }}
            style={{ transformOrigin: `${toe.cx}px ${toe.cy}px` }}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
}
