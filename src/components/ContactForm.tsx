// src/components/ContactForm.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import MotionWrapper from './MotionWrapper';
import { Send, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

// Import dynamique pour Lottie (Optimisation des performances)
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
    <section className="py-24 bg-[#050505] border-t border-white/5" id="contact">
      <MotionWrapper>
        <div className="container-max">
          <div className="section-title">
            <h2 className="text-3xl font-bold text-white">Démarrons votre projet</h2>
            <div className="underline-accent" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start mt-12">
            
            {/* --- COLONNE INFOS DE CONTACT (2/5) --- */}
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <div className="solid-card p-8 md:p-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold font-display text-white mb-4">Contact Direct</h3>
                <p className="text-text-secondary mb-10 leading-relaxed">
                  Vous avez un besoin de digitalisation, une infrastructure à bâtir ou un processus métier à automatiser ? Transformons vos défis en solutions scalables.
                </p>

                <div className="space-y-8 flex-grow">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-overcome-accent/10 border border-overcome-accent/20 flex items-center justify-center text-overcome-accent transition-colors group-hover:bg-overcome-accent group-hover:text-black">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] text-text-muted uppercase font-bold tracking-widest mb-1">Email Professionnel</p>
                      <a href="mailto:overcomeeha@gmail.com" className="text-white font-medium hover:text-overcome-accent transition-colors">
                        overcomeeha@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-black">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] text-text-muted uppercase font-bold tracking-widest mb-1">Ligne Directe / WhatsApp</p>
                      <a href="https://wa.me/243817517378" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-emerald-500 transition-colors">
                        +243 81 751 7378
                      </a>
                    </div>
                  </div>
                </div>

                {/* Animation Lottie (Décorative mais sérieuse) */}
                <div className="mt-8 opacity-60 mix-blend-screen pointer-events-none">
                  <Player
                    src="/lottie/contact.json"
                    autoplay
                    loop
                    style={{ height: 160, width: '100%' }}
                  />
                </div>
              </div>
            </div>

            {/* --- COLONNE FORMULAIRE (3/5) --- */}
            <form 
              onSubmit={handleSubmit} 
              className="lg:col-span-3 solid-card p-8 md:p-10 space-y-6 order-1 lg:order-2"
            >
              <h3 className="text-xl font-bold text-white mb-6">Envoyer une requête</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Nom complet ou Entreprise</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ex: Manassé Eha"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-overcome-accent focus:ring-1 focus:ring-overcome-accent transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Adresse Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="nom@entreprise.com"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-overcome-accent focus:ring-1 focus:ring-overcome-accent transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Détails de votre besoin</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Décrivez vos objectifs business ou vos contraintes techniques..."
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-overcome-accent focus:ring-1 focus:ring-overcome-accent transition-all outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5">
                <button
                  type="submit"
                  className="btn-premium btn-primary w-full sm:w-auto flex items-center justify-center gap-3"
                  disabled={status === 'sending' || status === 'success'}
                >
                  {status === 'sending' ? (
                    <>Traitement en cours...</>
                  ) : status === 'success' ? (
                    <>Requête envoyée</>
                  ) : (
                    <>
                      <Send size={18} /> Soumettre la demande
                    </>
                  )}
                </button>

                {/* Status Messages */}
                <div aria-live="polite" className="text-sm">
                  {status === 'success' && (
                    <div className="flex items-center gap-2 text-emerald-500 font-medium">
                      <CheckCircle size={18} /> Nous vous répondrons sous 24h ouvrées.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 font-medium">
                      <AlertCircle size={18} /> Erreur de transmission. Réessayez.
                    </div>
                  )}
                  {status === 'idle' && (
                    <span className="text-gray-500 text-xs hidden sm:block">
                      Vos données sont traitées de manière confidentielle.
                    </span>
                  )}
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}