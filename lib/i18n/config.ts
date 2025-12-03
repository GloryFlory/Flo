export const defaultLocale = 'en' as const;
export const locales = ['en', 'de'] as const;

export type Locale = (typeof locales)[number];

// Simple routing configuration for App Router
export const routing = {
  locales,
  defaultLocale,
  // Use pathname prefixing (e.g., /de/about)
  pathnames: {
    '/': '/',
    '/podcast': '/podcast',
    '/coaching': '/coaching',
    '/about': '/about',
  }
} as const;
