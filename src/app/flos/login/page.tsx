'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function FLOsLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/flos-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/flos');
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Not quite. Try again.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-sm w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Wordmark */}
        <div className="mb-10">
          <h1 className="text-white text-4xl font-light tracking-[0.3em] uppercase mb-2">
            FL<span className="text-white/40">Os</span>
          </h1>
          <p className="text-white/25 text-xs tracking-[0.2em] uppercase">
            Flo&apos;s OS
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="···"
            autoFocus
            autoComplete="current-password"
            className="bg-white/5 border border-white/10 text-white text-center text-lg rounded-lg px-4 py-3 outline-none focus:border-white/25 transition-colors placeholder:text-white/20 tracking-widest"
          />

          {error && (
            <motion.p
              className="text-rose-400/80 text-sm tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="bg-white/8 hover:bg-white/15 disabled:opacity-30 text-white/70 hover:text-white rounded-lg px-4 py-3 transition-all text-sm tracking-[0.15em] uppercase"
          >
            {loading ? 'Opening...' : 'Enter'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
