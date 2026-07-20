'use client';

import React, { useState } from 'react';

export default function RetreatInterestForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'added' | 'already_on_list'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/retreat-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.status === 'already_on_list' ? 'already_on_list' : 'added');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'added') {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-green-600">&#10003;</span>
        </div>
        <h4 className="text-lg font-bold text-green-700 mb-2">You&apos;re on the list.</h4>
        <p className="text-ink/60 text-sm">We&apos;ll email you the moment dates are announced.</p>
      </div>
    );
  }

  if (status === 'already_on_list') {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-brand">&#10003;</span>
        </div>
        <h4 className="text-lg font-bold text-ink mb-2">You&apos;re already on the list.</h4>
        <p className="text-ink/60 text-sm">We&apos;ll be in touch the moment dates are announced.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors text-sm sm:text-base"
          disabled={isSubmitting}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors text-sm sm:text-base"
          disabled={isSubmitting}
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg mt-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand text-white py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base mt-3"
      >
        {isSubmitting ? 'Submitting...' : 'Be the first to hear'}
      </button>

      <p className="text-xs text-ink/40 leading-relaxed mt-3 text-center">
        I&apos;d like to hear when dates are announced. No spam, unsubscribe anytime. See the{' '}
        <a href="/privacy" className="underline hover:text-ink/60">privacy policy</a>.
      </p>
    </form>
  );
}
