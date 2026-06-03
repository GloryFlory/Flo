'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Item = { src: string; type: 'image' | 'video' };

export default function MariaPhotoWall() {
  const [items, setItems] = useState<Item[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/maria-photos')
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  if (!loaded) return null;
  if (items.length === 0) {
    return (
      <p className="text-white/20 text-sm italic text-center">
        Add photos or videos to <code className="text-white/30">/public/maria/</code> and they&apos;ll appear here.
      </p>
    );
  }

  return (
    <div className="columns-2 md:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
      {items.map((item, i) => (
        <motion.div
          key={item.src}
          className="mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-xl bg-white/5 group relative"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1,
            delay: (i % 6) * 0.08,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto block transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />
          ) : (
            <img
              src={item.src}
              alt=""
              loading="lazy"
              className="w-full h-auto block transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
