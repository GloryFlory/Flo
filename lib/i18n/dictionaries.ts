import { type Locale } from './config';

// Get messages for specific page/namespace
export const getMessages = async (locale: Locale, namespace: string) => {
  try {
    // Dynamic import using relative paths
    const messages = await import(`../../public/locales/${locale}/${namespace}.json`);
    return messages.default || messages;
  } catch (error) {
    console.warn(`Translation file not found: ${locale}/${namespace}.json, falling back to English`);
    // Fallback to English if translation doesn't exist
    try {
      const fallback = await import(`../../public/locales/en/${namespace}.json`);
      return fallback.default || fallback;
    } catch (fallbackError) {
      console.error(`Fallback translation also failed for: en/${namespace}.json`);
      return {};
    }
  }
};
