'use client';

import { useEffect, useState } from 'react';

type Item = { src: string; type: 'image' | 'video'; width: number; height: number };

export default function MariaPhotoWall() {
  const [items, setItems] = useState<Item[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch('/api/maria-photos')
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  const markReady = (src: string) =>
    setReady((prev) => (prev[src] ? prev : { ...prev, [src]: true }));

  if (!loaded) return null;
  if (items.length === 0) {
    return (
      <p className="text-white/20 text-sm italic text-center">
        Add photos or videos to the <code className="text-white/30">maria</code> R2 bucket and they&apos;ll appear here.
      </p>
    );
  }

  return (
    <div className="columns-2 md:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
      {items.map((item, i) => {
        const isReady = !!ready[item.src];
        return (
          <div
            key={item.src}
            className="mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-xl bg-white/5 group relative"
          >
            <div
              style={{
                opacity: isReady ? 1 : 0,
                transition: `opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) ${isReady ? (i % 6) * 40 : 0}ms`,
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
                  width={item.width}
                  height={item.height}
                  onLoadedMetadata={() => markReady(item.src)}
                  className="w-full h-auto block transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt=""
                  width={item.width}
                  height={item.height}
                  loading={i < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                  onLoad={() => markReady(item.src)}
                  onError={() => markReady(item.src)}
                  className="w-full h-auto block transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
