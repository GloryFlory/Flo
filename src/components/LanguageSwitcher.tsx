'use client';

import { useState } from 'react';
import { useLocale } from '../../lib/i18n/hooks';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLocale, switchLocale } = useLocale();

  const handleLanguageSwitch = (locale: 'en' | 'de') => {
    switchLocale(locale);
    setIsOpen(false);
  };

  const currentLanguage = currentLocale === 'de' ? 'DE' : 'EN';
  const currentFlag = currentLocale === 'de' ? '🇩🇪' : '🇬🇧';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-ink text-sm font-medium"
      >
        <span className="text-base" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>
          {currentFlag}
        </span>
        <span>{currentLanguage}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border overflow-hidden z-50 min-w-[120px]">
          <button
            onClick={() => handleLanguageSwitch('en')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
              currentLocale === 'en' ? 'bg-brand/10 text-brand' : 'text-gray-700'
            }`}
          >
            <span className="text-base" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>
              🇬🇧
            </span>
            <span className="font-medium">English</span>
          </button>
          <button
            onClick={() => handleLanguageSwitch('de')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
              currentLocale === 'de' ? 'bg-brand/10 text-brand' : 'text-gray-700'
            }`}
          >
            <span className="text-base" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>
              🇩🇪
            </span>
            <span className="font-medium">Deutsch</span>
          </button>
        </div>
      )}
    </div>
  );
}
