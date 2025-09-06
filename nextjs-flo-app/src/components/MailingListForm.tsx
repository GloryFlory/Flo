"use client";
import { useRef, useState } from 'react';

export default function MailingListForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    const email = emailRef.current?.value;
    if (!email) {
      setError('Please enter your email.');
      setStatus('idle');
      return;
    }
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setError('Something went wrong.');
      setStatus('error');
    }
  }

  return (
    <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
      <div className="flex gap-2 w-full">
        <input ref={emailRef} type="email" placeholder="Your email" className="border border-brand rounded px-4 py-2 flex-1" required disabled={status==='loading'} />
        <button type="submit" className="btn btn-primary" disabled={status==='loading'}>
          {status === 'loading' ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>
      {status === 'success' && <p className="text-green-600 text-sm mt-2">Thank you for signing up!</p>}
      {status === 'error' && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </form>
  );
}
