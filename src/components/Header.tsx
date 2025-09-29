'use client';

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '../../lib/i18n/hooks';

type TranslationKey = 'home' | 'podcast' | 'coaching' | 'about' | 'bookCall' | 'livingWithEase' | 'anxietyProgram' | 'authenticMan' | 'mensDevelopment' | 'connectionRelationships' | 'relationshipCoaching';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLocale } = useLocale();
  
  // Translation helper function
  const t = (key: TranslationKey) => {
    const translations: Record<string, Record<TranslationKey, string>> = {
      en: {
        home: 'Home',
        podcast: 'Podcast',
        coaching: 'Coaching',
        about: 'About',
        bookCall: 'Book a Call',
        livingWithEase: 'Living with Ease',
        anxietyProgram: 'Anxiety Program',
        authenticMan: 'Becoming the Authentic Man',
        mensDevelopment: "Men's Development",
        connectionRelationships: 'Connection & Relationships',
        relationshipCoaching: 'Relationship Coaching'
      },
      de: {
        home: 'Startseite',
        podcast: 'Podcast',
        coaching: 'Coaching',
        about: 'Über mich',
        bookCall: 'Termin buchen',
        livingWithEase: 'Leben mit Leichtigkeit',
        anxietyProgram: 'Angst-Programm',
        authenticMan: 'Der authentische Mann werden',
        mensDevelopment: 'Männerentwicklung',
        connectionRelationships: 'Verbindung & Beziehungen',
        relationshipCoaching: 'Beziehungscoaching'
      }
    };
    
    return translations[currentLocale]?.[key] || translations.en[key] || key;
  };

  // Dynamic URLs based on locale
  const getUrl = (path: string) => {
    return currentLocale === 'de' ? `/de${path}` : path;
  };

  return (
    <header className="bg-transparent shadow-sm sticky top-0 z-50">
      <div className="w-full px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Very Far Left */}
          <a href={getUrl('/')} className="flex items-center flex-shrink-0">
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
                href={getUrl('/')} 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                {t('home')}
              </a>
              <a 
                href={getUrl('/podcast')} 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                {t('podcast')}
              </a>
              
              {/* Coaching Dropdown */}
              <div className="relative group">
                <a 
                  href={getUrl('/coaching')} 
                  className="text-ink hover:text-brand transition-colors font-medium text-lg flex items-center"
                >
                  {t('coaching')}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a 
                      href={getUrl('/programs/living-with-ease')} 
                      className="block px-4 py-3 text-ink hover:bg-brand/10 hover:text-brand transition-colors"
                    >
                      <div className="font-medium">{t('livingWithEase')}</div>
                      <div className="text-sm text-ink/60">{t('anxietyProgram')}</div>
                    </a>
                    <a 
                      href={getUrl('/programs/authentic-man')} 
                      className="block px-4 py-3 text-ink hover:bg-brand/10 hover:text-brand transition-colors"
                    >
                      <div className="font-medium">{t('authenticMan')}</div>
                      <div className="text-sm text-ink/60">{t('mensDevelopment')}</div>
                    </a>
                    <a 
                      href={getUrl('/programs/connection-relationships')} 
                      className="block px-4 py-3 text-ink hover:bg-brand/10 hover:text-brand transition-colors"
                    >
                      <div className="font-medium">{t('connectionRelationships')}</div>
                      <div className="text-sm text-ink/60">{t('relationshipCoaching')}</div>
                    </a>
                  </div>
                </div>
              </div>
              
              <a 
                href={getUrl('/about')} 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                {t('about')}
              </a>
            </nav>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Book a Call Button */}
            <a
              href="https://meet.brevo.com/florian-hohenleitner/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-brand/90 transition-colors shadow-lg ml-6"
            >
              {t('bookCall')}
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
                href={getUrl('/')} 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </a>
              <a 
                href={getUrl('/podcast')} 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('podcast')}
              </a>
              <a 
                href={getUrl('/coaching')} 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('coaching')}
              </a>
              <a 
                href={getUrl('/about')} 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </a>
              
              {/* Language Switcher for Mobile */}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/intro?utm_campaign=header-cta&utm_source=website&utm_medium=mobile-menu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-brand/90 transition-colors shadow-lg mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('bookCall')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
