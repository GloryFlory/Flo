'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function MariaLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/maria-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/maria');
    } else {
      setError('That\'s not it, my love. Try again.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-sm w-full"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <div className="mb-8 text-4xl">🌸</div>
        <h1 className="text-white text-2xl font-light tracking-widest uppercase mb-2">
          For Maria
        </h1>
        <p className="text-white/40 text-sm mb-10 tracking-wide">
          This place is yours. You know the word.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="···"
            autoFocus
            className="bg-white/5 border border-white/10 text-white text-center text-lg rounded-lg px-4 py-3 outline-none focus:border-white/30 transition-colors placeholder:text-white/20 tracking-widest"
          />
          {error && (
            <motion.p
              className="text-rose-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white rounded-lg px-4 py-3 transition-colors text-sm tracking-widest uppercase"
          >
            {loading ? 'Opening...' : 'Enter'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
