'use client';

import { useEffect } from 'react';

export default function BriefScrollBar() {
  useEffect(() => {
    const handler = () => {
      const d = document.documentElement;
      const pct = Math.round((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100) || 0;
      const pf = document.getElementById('pf');
      const pp = document.getElementById('pp');
      if (pf) pf.style.width = pct + '%';
      if (pp) pp.textContent = pct + '%';
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return null;
}
