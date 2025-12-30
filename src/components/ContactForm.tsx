'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import MotionWrapper from './MotionWrapper';
import { Send, MessageSquare, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

// Import dynamique pour Lottie
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
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
    <MotionWrapper>
      <div className="container-max py-12">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* --- COLONNE INFOS DE CONTACT (2/5) --- */}
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
            <div className="glass-card p-8 bg-overcome-secondary/50">
              <h3 className="text-2xl font-bold font-display mb-6">Parlons de votre projet</h3>
              <p className="text-text-secondary mb-8">
                Vous avez une idée, un besoin de digitalisation ou une infrastructure à bâtir ? 
                Je suis prêt à transformer vos défis en solutions scalables.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-overcome-accent/10 flex items-center justify-center text-overcome-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold tracking-widest">Email</p>
                    <p className="text-text-primary">overcomeeha@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-overcome-success/10 flex items-center justify-center text-overcome-success">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold tracking-widest">WhatsApp</p>
                    <a href="https://wa.me/243990918934" className="text-text-primary hover:text-overcome-success transition-colors">
                      +243 990 918 934
                    </a>
                  </div>
                </div>
              </div>

              {/* Lottie Animation intégrée ici */}
              <div className="mt-8 opacity-80">
                <Player
                  src="/lottie/contact.json"
                  autoplay
                  loop
                  style={{ height: 200, width: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* --- COLONNE FORMULAIRE (3/5) --- */}
          <form 
            onSubmit={handleSubmit} 
            className="lg:col-span-3 glass-card p-8 lg:p-10 space-y-6 order-1 lg:order-2"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-secondary ml-1">Nom complet</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ex: Manassé Eha"
                  className="w-full bg-overcome-bg/50 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:border-overcome-accent focus:ring-1 focus:ring-overcome-accent transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-secondary ml-1">Adresse Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="nom@exemple.com"
                  className="w-full bg-overcome-bg/50 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:border-overcome-accent focus:ring-1 focus:ring-overcome-accent transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-secondary ml-1">Votre message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Décrivez brièvement votre projet ou votre besoin..."
                className="w-full bg-overcome-bg/50 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:border-overcome-accent focus:ring-1 focus:ring-overcome-accent transition-all outline-none resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                type="submit"
                className="btn-premium btn-primary w-full sm:w-auto flex items-center gap-3"
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'sending' ? (
                  <>Patientez...</>
                ) : status === 'success' ? (
                  <>Envoyé !</>
                ) : (
                  <>
                    <Send size={18} /> Envoyer le message
                  </>
                )}
              </button>

              {/* Status Messages */}
              <div aria-live="polite">
                {status === 'success' && (
                  <div className="flex items-center gap-2 text-overcome-success font-medium">
                    <CheckCircle size={20} /> Message reçu avec succès.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 font-medium">
                    <AlertCircle size={20} /> Une erreur est survenue.
                  </div>
                )}
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </MotionWrapper>
  );
}