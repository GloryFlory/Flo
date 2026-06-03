'use client';

import { motion, type Variants } from 'framer-motion';
import Tilt from './Tilt';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const projects = [
  {
    href: 'https://www.acrointhesun.com',
    img: '/mac-logo.webp',
    alt: 'Mediterranean Acro Convention',
    title: 'Mediterranean Acro Convention',
    desc: 'Acro yoga & community on the coast',
  },
  {
    href: 'https://www.tryflowgrid.com',
    img: '/flow-grid.png',
    alt: 'FlowGrid',
    title: 'FlowGrid',
    desc: 'Tools for flow & productivity',
  },
  {
    href: 'https://lifestories.love',
    img: '/life-stories.png',
    alt: 'Life Stories',
    title: 'Life Stories',
    desc: 'Capture & share meaningful memories',
  },
];

export default function ProjectCards() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((p) => (
        <motion.div key={p.href} variants={card}>
          <Tilt className="h-full">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/card block h-full bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center transition-[box-shadow] duration-500 ease-out hover:shadow-2xl"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.08]"
                />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold mb-2 text-ink transition-colors duration-300 group-hover/card:text-brand">
                {p.title}
              </h3>
              <p className="text-ink/60 text-sm">{p.desc}</p>
            </a>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  );
}
