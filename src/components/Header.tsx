'use client';

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '../../lib/i18n/hooks';

type TranslationKey = 'home' | 'podcast' | 'behindTheEpisode' | 'retreat' | 'about';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLocale } = useLocale();
  
  // Translation helper function
  const t = (key: TranslationKey) => {
    const translations: Record<string, Record<TranslationKey, string>> = {
      en: {
        home: 'Home',
        podcast: 'Podcast',
        behindTheEpisode: 'Behind the Episode',
        retreat: 'Retreat',
        about: 'About',
      },
      de: {
        home: 'Startseite',
        podcast: 'Podcast',
        behindTheEpisode: 'Hinter der Episode',
        retreat: 'Retreat',
        about: 'Über mich',
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
              <a 
                href={getUrl('/retreat')} 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                {t('retreat')}
              </a>
              <a 
                href={getUrl('/about')} 
                className="text-ink hover:text-brand transition-colors font-medium text-lg"
              >
                {t('about')}
              </a>
            </nav>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
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
                href={getUrl('/retreat')} 
                className="text-ink hover:text-brand transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('retreat')}
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
