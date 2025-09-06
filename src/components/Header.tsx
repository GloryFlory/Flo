'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent shadow-sm sticky top-0 z-50">
      <div className="w-full px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Very Far Left */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Grow with the Flo"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation - Very Far Right */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-10">
              <a 
                href="/" 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                Home
              </a>
              <a 
                href="/podcast" 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                Podcast
              </a>
              
              {/* Coaching Dropdown */}
              <div className="relative group">
                <a 
                  href="/coaching" 
                  className="text-ink hover:text-brand transition-colors font-medium text-lg flex items-center"
                >
                  Coaching
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a 
                      href="/programs/living-with-ease" 
                      className="block px-4 py-3 text-ink hover:bg-brand/10 hover:text-brand transition-colors"
                    >
                      <div className="font-medium">Living with Ease</div>
                      <div className="text-sm text-ink/60">Anxiety Program</div>
                    </a>
                    <a 
                      href="/programs/authentic-man" 
                      className="block px-4 py-3 text-ink hover:bg-brand/10 hover:text-brand transition-colors"
                    >
                      <div className="font-medium">Becoming the Authentic Man</div>
                      <div className="text-sm text-ink/60">Men's Development</div>
                    </a>
                    <a 
                      href="/programs/connection-relationships" 
                      className="block px-4 py-3 text-ink hover:bg-brand/10 hover:text-brand transition-colors"
                    >
                      <div className="font-medium">Connection & Relationships</div>
                      <div className="text-sm text-ink/60">Relationship Coaching</div>
                    </a>
                  </div>
                </div>
              </div>
              
              <a 
                href="/about" 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                About
              </a>
            </nav>
            
            {/* Book a Call Button */}
            <a
              href="https://calendly.com/florian-hohenleitner/how-can-i-help"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-brand/90 transition-colors shadow-lg ml-6"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-ink"></div>
              <div className="w-6 h-0.5 bg-ink"></div>
              <div className="w-6 h-0.5 bg-ink"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="/" 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/podcast" 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Podcast
              </a>
              <a 
                href="/coaching" 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Coaching
              </a>
              <a 
                href="/about" 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="https://calendly.com/florian-hohenleitner/how-can-i-help"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-brand/90 transition-colors shadow-lg mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
