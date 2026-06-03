'use client';

import BuyMeCoffeeButton from './BuyMeCoffeeButton';
import { useLocale } from '../../lib/i18n/hooks';

type TranslationKey = 'home' | 'podcast' | 'behindTheEpisode' | 'retreat' | 'about' | 'quickLinks' | 'connect' | 'email' | 'rightsReserved' | 'description';

export default function Footer() {
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
        quickLinks: 'Quick Links',
        connect: 'Connect',
        email: 'Email',
        rightsReserved: 'All rights reserved.',
        description: 'Real conversations about anxiety, identity, connection, and what it means to live a life that actually feels like yours.'
      },
      de: {
        home: 'Startseite',
        podcast: 'Podcast',
        behindTheEpisode: 'Behind the Episode',
        retreat: 'Retreat',
        about: 'Über mich',
        quickLinks: 'Schnellzugriff',
        connect: 'Verbinden',
        email: 'E-Mail',
        rightsReserved: 'Alle Rechte vorbehalten.',
        description: 'Echte Gespräche über Angst, Identität, Verbindung und was es bedeutet, ein Leben zu führen, das sich wirklich wie deins anfühlt.'
      }
    };
    
    return translations[currentLocale]?.[key] || translations.en[key] || key;
  };

  // Dynamic URLs based on locale
  const getUrl = (path: string) => {
    return currentLocale === 'de' ? `/de${path}` : path;
  };
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Grow with the Flo
            </h3>
            <p className="text-white/80 mb-4 max-w-md">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@GrowWithTheFloPodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/grow.with_the.flo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://open.spotify.com/show/3vRG8eplIkpnBBAUPpih2N"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/grow-with-the-flo/id1795716394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Apple Podcasts
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href={getUrl('/')} className="text-white/80 hover:text-white transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href={getUrl('/podcast')} className="text-white/80 hover:text-white transition-colors">
                  {t('podcast')}
                </a>
              </li>
              <li>
                <a href="/retreat" className="text-white/80 hover:text-white transition-colors">
                  {t('retreat')}
                </a>
              </li>
              <li>
                <a href={getUrl('/about')} className="text-white/80 hover:text-white transition-colors">
                  {t('about')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">{t('connect')}</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a 
                  href="mailto:growwiththeflo.podcast@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t('email')}
                </a>
              </li>
            </ul>
            
            {/* Buy Me a Coffee Button */}
            <BuyMeCoffeeButton />
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Florian Hohenleitner. {t('rightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
