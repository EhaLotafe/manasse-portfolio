// src/components/HeroSection.tsx
'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const column1 = [
  '/projects/agric-connect.jpeg',
  '/me-1.jpg',
  '/projects/edupay.jpeg',
]

const column2 = [
  '/me-2.jpg', 
  '/projects/vitrine-lub.png',
  '/projects/chatbots-cozo.jpeg',
]

const column3 = [
  '/projects/school-platform.png',
  '/me-3.jpg',
  '/projects/portfolio-ia.jpeg',
]

export default function HeroSection() {
  // ✅ CORRECTION CRITIQUE : On écoute le défilement global de la page.
  // Plus de "useRef", plus de "target". Ça empêche le crash SSR à 100%.
  const { scrollY } = useScroll()

  // On ajuste les valeurs de la parallaxe en fonction des pixels défilés (de 0 à 1000px)
  const y1 = useTransform(scrollY, [0, 1000], [0, -250])
  const y2 = useTransform(scrollY, [0, 1000], [0, 250])
  const y3 = useTransform(scrollY, [0, 1000], [0, -150])

  return (
    // ⚠️ Plus de ref={containerRef} ici, on a nettoyé la balise !
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] pt-20 border-b border-white/5">
      
      <div className="container-max grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* --- TEXTE GAUCHE (7 COLONNES) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Badges de localisation & Rôle */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-[11px] uppercase tracking-widest font-bold bg-white/5 px-3 py-1.5 rounded-md border border-white/5">
              <MapPin size={14} /> Lubumbashi, RDC
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight text-white">
            MANASSÉ <br />
            <span className="text-gradient-corporate">LOTAFE.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed border-l-2 border-emerald-500 pl-6">
            Je transforme vos visions en produits digitaux scalables. Du SaaS éducatif à l'AgriTech, j'allie <span className="text-white font-semibold">ingénierie logicielle</span> et impact local.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link href="/#contact" className="btn-premium btn-primary flex items-center justify-center gap-2 group">
              Démarrer un projet 
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/projects" className="btn-premium btn-outline text-center">
              Voir le portfolio
            </Link>
          </div>

          {/* KPIs / Chiffres clés */}
          <div className="flex items-center gap-8 md:gap-12 pt-10 border-t border-white/5 mt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mt-1">Produits Livrés</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mt-1">Focus Business</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-emerald-500 flex items-center gap-1">
                IA <Zap size={16} className="text-emerald-500 fill-emerald-500" />
              </span>
              <span className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mt-1">Intégration Native</span>
            </div>
          </div>
        </motion.div>

        {/* --- PARALLAX GRID DROITE (5 COLONNES) --- */}
        <div className="lg:col-span-5 relative h-[700px] hidden lg:grid grid-cols-3 gap-4 mask-fade-edges">
          
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
            {column1.map((src, i) => (
              <div key={`c1-${i}`} className="relative aspect-[3/4] rounded-xl overflow-hidden solid-card p-1 shrink-0">
                <Image 
                  src={src} alt="Réalisation Manassé" fill sizes="(max-width: 768px) 100vw, 33vw" priority={i === 0}
                  className={`object-cover rounded-lg transition-all duration-700 ${src.includes('me') ? 'grayscale-0' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'}`} 
                />
              </div>
            ))}
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 pt-24">
            {column2.map((src, i) => (
              <div key={`c2-${i}`} className="relative aspect-[3/4] rounded-xl overflow-hidden solid-card p-1 shrink-0">
                <Image 
                  src={src} alt="Réalisation Manassé" fill sizes="(max-width: 768px) 100vw, 33vw" priority={i === 0}
                  className={`object-cover rounded-lg transition-all duration-700 ${src.includes('me') ? 'grayscale-0' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'}`} 
                />
              </div>
            ))}
          </motion.div>

          <motion.div style={{ y: y3 }} className="flex flex-col gap-4 pt-10">
            {column3.map((src, i) => (
              <div key={`c3-${i}`} className="relative aspect-[3/4] rounded-xl overflow-hidden solid-card p-1 shrink-0">
                <Image 
                  src={src} alt="Réalisation Manassé" fill sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover rounded-lg transition-all duration-700 ${src.includes('me') ? 'grayscale-0' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'}`} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-500"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}