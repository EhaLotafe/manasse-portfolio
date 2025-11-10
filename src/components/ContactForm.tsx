'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import MotionWrapper from './MotionWrapper';

// Import dynamique pour empêcher le rendu côté serveur
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 2500);
    }
  }

  return (
    <MotionWrapper>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Votre nom"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="exemple@domaine.com"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="Votre message..."
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-navy text-white font-semibold"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Envoi...' : 'Envoyer'}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <div className="text-green-600 text-sm">✅ Message envoyé. Merci !</div>
              )}
              {status === 'error' && (
                <div className="text-red-600 text-sm">❌ Erreur. Réessayez plus tard.</div>
              )}
            </div>
          </div>
        </form>

        {/* Section Lottie / Contact WhatsApp */}
        <div className="bg-gradient-to-br from-blue to-green rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center">
          <Player
            src="/lottie/contact.json"
            autoplay
            loop
            style={{ height: 300, width: '100%' }}
          />
          <p className="mt-4 text-white text-center">
            Contact via WhatsApp :{' '}
            <a
              className="underline"
              href="https://wa.me/243990918934"
              target="_blank"
              rel="noopener noreferrer"
            >
              +243 990 918 934
            </a>
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}
