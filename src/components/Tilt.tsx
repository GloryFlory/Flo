'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. Keep it subtle (4–8). */
  max?: number;
  /** Perspective in px. Higher = flatter. */
  perspective?: number;
};

/**
 * Subtle 3D tilt that follows the mouse. Uses Framer Motion springs so the
 * card eases back to center on leave. Honors `prefers-reduced-motion` (becomes
 * a no-op wrapper). Pointer events still pass through to children.
 */
export default function Tilt({ children, className, max = 6, perspective = 1000 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); // -0.5 … 0.5
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const rotateY = useTransform(sx, (v) => v * max);
  const rotateX = useTransform(sy, (v) => -v * max);

  // Cheap reduced-motion check on the client.
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective, transformStyle: 'preserve-3d' }}
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
