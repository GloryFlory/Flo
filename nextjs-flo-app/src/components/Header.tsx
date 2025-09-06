
"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
  <header className="w-full bg-brand shadow" style={{height: '77px', minHeight: '77px', maxHeight: '77px', paddingTop: 0, paddingBottom: 0}}>
  <nav className="w-full flex justify-between items-center px-8 h-full">
        <div className="flex items-center gap-6">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
          <span className="font-heading text-6xl font-extrabold text-white">Florian Hohenleitner</span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 font-bold text-2xl items-center justify-end text-white">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/podcast" className="text-white">Podcast</Link></li>
          <li><Link href="/coaching" className="text-white">Coaching</Link></li>
          <li><Link href="/about" className="text-white">About</Link></li>
          <li>
            <a href="https://www.buymeacoffee.com/florianhoha" target="_blank" rel="noopener">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: '48px' }} />
            </a>
          </li>
        </ul>
        {/* Burger for mobile */}
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Open navigation menu">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Mobile Nav */}
        {open && (
          <div className="absolute top-20 left-0 w-full bg-brand shadow-lg z-50 md:hidden animate-fade-in">
            <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-white">
              <li><Link href="/" onClick={() => setOpen(false)} className="text-white">Home</Link></li>
              <li><Link href="/podcast" onClick={() => setOpen(false)} className="text-white">Podcast</Link></li>
              <li><Link href="/coaching" onClick={() => setOpen(false)} className="text-white">Coaching</Link></li>
              <li><Link href="/about" onClick={() => setOpen(false)} className="text-white">About</Link></li>
              <li>
                <a href="https://www.buymeacoffee.com/florianhoha" target="_blank" rel="noopener" onClick={() => setOpen(false)}>
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: '36px' }} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
