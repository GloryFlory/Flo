'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, defaultLocale, type Locale } from './config';

export function useLocale() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract locale from pathname
  const getCurrentLocale = (): Locale => {
    const segments = pathname.split('/');
    const firstSegment = segments[1];
    
    if (locales.includes(firstSegment as Locale)) {
      return firstSegment as Locale;
    }
    
    return defaultLocale;
  };

  const currentLocale = getCurrentLocale();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    
    // Remove current locale if it exists
    if (locales.includes(segments[1] as Locale)) {
      segments.splice(1, 1);
    }
    
    // Add new locale if it's not default
    if (newLocale !== defaultLocale) {
      segments.splice(1, 0, newLocale);
    }
    
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return {
    currentLocale,
    switchLocale,
    isDefault: currentLocale === defaultLocale,
  };
}

// Utility to detect browser language
export function detectBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  
  const browserLang = navigator.language.split('-')[0];
  return locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale;
}

// Simple translation function for client components
export function useTranslations(messages: any) {
  return function t(key: string, vars?: Record<string, string | number>): string {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== 'string') {
      return key; // Return key if translation not found
    }
    
    // Simple variable replacement
    if (vars) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, varName) => {
        return vars[varName]?.toString() || match;
      });
    }
    
    return value;
  };
}
