'use client';

import { motion } from 'framer-motion';

export default function MariaBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
      {/* Drifting aurora blobs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '70vw',
          height: '70vw',
          top: '-20vw',
          left: '-15vw',
          background: 'radial-gradient(circle, rgba(220,100,120,0.18) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, 40, 80, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '60vw',
          height: '60vw',
          bottom: '-15vw',
          right: '-10vw',
          background: 'radial-gradient(circle, rgba(200,140,90,0.14) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -30, -60, 0],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vw',
          height: '50vw',
          top: '30vh',
          left: '40vw',
          background: 'radial-gradient(circle, rgba(140,90,160,0.10) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }}
      />
    </div>
  );
}
