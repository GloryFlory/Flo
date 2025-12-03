'use client';

import React, { useState } from 'react';
import { useLocale } from '../../lib/i18n/hooks';

type TranslationKey = 'joinCommunity' | 'weeklyInsights' | 'yourName' | 'yourEmail' | 'subscribe' | 'subscribing' | 'welcomeCommunity' | 'checkEmail' | 'networkError' | 'somethingWrong';

export default function MailingListForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const { currentLocale } = useLocale();
  
  // Translation helper function
  const t = (key: TranslationKey) => {
    const translations: Record<string, Record<TranslationKey, string>> = {
      en: {
        joinCommunity: 'Join the Community',
        weeklyInsights: 'Get weekly insights on growth, creativity, and finding your flow.',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        subscribe: 'Subscribe',
        subscribing: 'Subscribing...',
        welcomeCommunity: 'Welcome to the community!',
        checkEmail: 'Check your email for a confirmation message.',
        networkError: 'Network error. Please check your connection and try again.',
        somethingWrong: 'Something went wrong. Please try again.'
      },
      de: {
        joinCommunity: 'Der Community beitreten',
        weeklyInsights: 'Erhalten Sie wöchentliche Einblicke in Wachstum, Kreativität und das Finden Ihres Flows.',
        yourName: 'Ihr Name',
        yourEmail: 'Ihre E-Mail',
        subscribe: 'Abonnieren',
        subscribing: 'Wird abonniert...',
        welcomeCommunity: 'Willkommen in der Community!',
        checkEmail: 'Überprüfen Sie Ihre E-Mail für eine Bestätigungsnachricht.',
        networkError: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
        somethingWrong: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.'
      }
    };
    
    return translations[currentLocale]?.[key] || translations.en[key] || key;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName: name.split(' ')[0] || name,
          lastName: name.split(' ').slice(1).join(' ') || '',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        setName('');
        setTimeout(() => setIsSuccess(false), 5000); // Hide success message after 5 seconds
      } else {
        setError(data.error || t('somethingWrong'));
      }
    } catch (err) {
      setError(t('networkError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-md mx-auto">
      <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4 text-center text-ink">
        {t('joinCommunity')}
      </h3>
      <p className="text-ink/80 mb-6 text-center text-sm sm:text-base">
        {t('weeklyInsights')}
      </p>
      
      {isSuccess ? (
        <div className="text-center py-6 sm:py-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl sm:text-2xl">✓</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-green-600 mb-2">{t('welcomeCommunity')}</h4>
          <p className="text-green-600 text-sm sm:text-base">{t('checkEmail')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder={t('yourName')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors text-sm sm:text-base"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={t('yourEmail')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors text-sm sm:text-base"
              required
              disabled={isSubmitting}
            />
          </div>
          
          {error && (
            <div className="text-red-600 text-xs sm:text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand text-white py-2 sm:py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isSubmitting ? t('subscribing') : t('subscribe')}
          </button>
        </form>
      )}
    </div>
  );
}