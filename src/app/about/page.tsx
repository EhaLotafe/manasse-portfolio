// src/app/about/page.tsx
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Globe2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Terminal
} from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Des solutions IA et SaaS à la pointe de la technologie.' },
  { icon: Target, title: 'Rigueur', desc: 'Code propre, architecture scalable et respect des délais.' },
  { icon: Globe2, title: 'Accessibilité', desc: 'Outils conçus pour fonctionner même en basse connectivité.' },
  { icon: TrendingUp, title: 'Scalabilité', desc: 'Des systèmes capables d\'accompagner votre croissance.' },
  { icon: ShieldCheck, title: 'Résilience', desc: 'Sécurité et persistance des données (Offline-first).' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="container-max">
        
        {/* --- EN-TÊTE --- */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Terminal size={20} />
            </div>
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">
              L'Architecte
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 tracking-tight"
          >
            Manassé Eha Lotafe<span className="text-emerald-500">.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- COLONNE GAUCHE (BIO & VISION) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            {/* Bio */}
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                Je suis développeur logiciel, <strong className="text-white font-medium">architecte de solutions numériques</strong> et chercheur en IA appliquée.
              </p>
              <p>
                Ma démarche est simple : je ne crée pas de simples "sites web". Je conçois des <strong className="text-white font-medium">outils pragmatiques et rentables</strong> pour résoudre des problèmes réels rencontrés par les entreprises en RDC et en Afrique centrale.
              </p>
            </div>

            {/* Vision */}
            <div className="solid-card p-8 bg-[#0A0A0A] border-l-4 border-l-emerald-500">
              <h2 className="text-xl font-bold font-display text-white mb-3">La Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                Construire des plateformes et des outils qui élèvent la productivité locale, accélèrent la transformation économique et forment une nouvelle génération de bâtisseurs technologiques.
              </p>
            </div>
          </motion.div>

          {/* --- COLONNE DROITE (IMAGE PRO) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden solid-card p-2 bg-[#0A0A0A]"
          >
            {/* ⚠️ Assure-toi que cette image existe dans ton dossier public */}
            <Image 
              src="/me-1.jpg" 
              alt="Manassé Eha Lotafe" 
              fill
              className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 rounded-xl" />
          </motion.div>
        </div>

        {/* --- SECTION VALEURS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-white/5"
        >
          <h2 className="text-3xl font-bold font-display text-white mb-10 text-center">
            Mes Valeurs <span className="text-emerald-500">Fondamentales</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="solid-card p-6 bg-[#0A0A0A] hover:border-emerald-500/30 transition-colors flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/5 flex items-center justify-center text-emerald-500 mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{val.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* --- CALL TO ACTION (CTA) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 solid-card p-10 md:p-16 bg-[#0A0A0A] text-center flex flex-col items-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à structurer votre écosystème digital ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl">
            Passez de l'idée à un produit scalable et robuste. Discutons de vos besoins métiers et de l'architecture technique idéale.
          </p>
          <Link 
            href="/#contact" 
            className="btn-premium btn-primary flex items-center gap-2 group"
          >
            Démarrer une collaboration
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}