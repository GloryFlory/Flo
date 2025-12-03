// Simple translation service using free translation APIs or fallback to static translations
interface TranslationCache {
  [key: string]: string;
}

class TranslationService {
  private cache: TranslationCache = {};
  
  // AI-powered translation function (you can replace with OpenAI API or other services)
  async translateText(text: string, targetLanguage: 'de' | 'en'): Promise<string> {
    // Create cache key
    const cacheKey = `${text}_${targetLanguage}`;
    
    // Return cached translation if available
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }

    // For now, we'll use a simple approach with basic translations
    // You can later integrate with OpenAI API or Google Translate
    if (targetLanguage === 'de') {
      const translated = await this.translateToGerman(text);
      this.cache[cacheKey] = translated;
      return translated;
    }
    
    return text; // Return original if translating to English
  }

  private async translateToGerman(text: string): Promise<string> {
    // Basic keyword replacements for common podcast terms
    const replacements: { [key: string]: string } = {
      'episode': 'Episode',
      'listen': 'anhören',
      'podcast': 'Podcast',
      'growth': 'Wachstum',
      'personal development': 'Persönlichkeitsentwicklung',
      'anxiety': 'Angst',
      'confidence': 'Selbstvertrauen',
      'mindfulness': 'Achtsamkeit',
      'relationships': 'Beziehungen',
      'authenticity': 'Authentizität',
      'transformation': 'Transformation',
      'self-discovery': 'Selbstentdeckung',
      'inner work': 'innere Arbeit',
      'emotional intelligence': 'emotionale Intelligenz',
      'vulnerability': 'Verletzlichkeit',
      'resilience': 'Widerstandsfähigkeit',
      'purpose': 'Zweck',
      'flow state': 'Flow-Zustand',
      'burnout': 'Burnout',
      'stress': 'Stress',
      'meditation': 'Meditation',
      'healing': 'Heilung',
      'trauma': 'Trauma',
      'therapy': 'Therapie',
      'mental health': 'mentale Gesundheit',
      'self-care': 'Selbstfürsorge',
      'boundaries': 'Grenzen',
      'communication': 'Kommunikation',
      'leadership': 'Führung',
      'creativity': 'Kreativität',
      'inspiration': 'Inspiration',
      'motivation': 'Motivation',
      'goals': 'Ziele',
      'success': 'Erfolg',
      'failure': 'Scheitern',
      'fear': 'Angst',
      'courage': 'Mut',
      'love': 'Liebe',
      'connection': 'Verbindung',
      'community': 'Gemeinschaft',
      'spirituality': 'Spiritualität',
      'wisdom': 'Weisheit',
      'journey': 'Reise',
      'life': 'Leben',
      'balance': 'Balance',
      'harmony': 'Harmonie',
      'peace': 'Frieden',
      'joy': 'Freude',
      'happiness': 'Glück',
      'fulfillment': 'Erfüllung'
    };

    let translatedText = text;
    
    // Apply basic replacements
    for (const [english, german] of Object.entries(replacements)) {
      const regex = new RegExp(`\\b${english}\\b`, 'gi');
      translatedText = translatedText.replace(regex, german);
    }

    // TODO: For production, integrate with a proper translation API
    // Example with OpenAI API:
    /*
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, targetLanguage: 'de' })
    });
    const { translatedText } = await response.json();
    */

    return translatedText;
  }

  // Translate episode metadata
  async translateEpisode(episode: any, targetLanguage: 'de' | 'en') {
    if (targetLanguage === 'en') return episode;

    return {
      ...episode,
      title: await this.translateText(episode.title, 'de'),
      description: await this.translateText(episode.description, 'de'),
      shortDescription: await this.translateText(episode.shortDescription, 'de'),
      // Keep original English versions for reference
      originalTitle: episode.title,
      originalDescription: episode.description,
      originalShortDescription: episode.shortDescription,
    };
  }
}

export const translationService = new TranslationService();
