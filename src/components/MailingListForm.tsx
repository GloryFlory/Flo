'use client';

import React, { useState } from 'react';

export default function MailingListForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to RSS feed signup or external newsletter form
    window.open('https://rss.beehiiv.com/feeds/4ah1LJYyHc.xml', '_blank');
    alert('Opening newsletter RSS feed! You can also subscribe to our newsletter directly.');
    setEmail('');
    setName('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-heading font-bold mb-4 text-center text-ink">
        Join the Community
      </h3>
      <p className="text-ink/80 mb-6 text-center">
        Get weekly insights on growth, creativity, and finding your flow.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brand text-white py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
