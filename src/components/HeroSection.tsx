'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap, MapPin } from 'lucide-react'
import Image from 'next/image'

// MÉLANGE : PROJETS + MANASSÉ
// Assure-toi d'avoir me-1.jpg, me-2.jpg, me-3.jpg dans ton dossier public/
const column1 = [
  '/projects/agric-connect.jpeg',
  '/me-1.jpg', // Photo de toi (Portrait pro)
  '/projects/edupay.jpeg',
]

const column2 = [
  '/me-2.HEIC', // Photo de toi (En plein travail ou lifestyle)
  '/projects/vitrine-lub.png',
  '/projects/chatbots-cozo.jpeg',
]

const column3 = [
  '/projects/school-platform.png',
  '/me-3.jpg', // Photo de toi (Souriant ou créatif)
  '/projects/portfolio-ia.jpeg',
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end start"]
  })

  // Vitesses de parallaxe pour créer de la profondeur
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])

  if (!mounted) return <section className="min-h-screen bg-overcome-bg" />

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-overcome-bg pt-20">
      <div className="hero-mesh" />

      <div className="container-max grid lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* --- TEXTE GAUCHE (7 COLONNES) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-overcome-accent/10 border border-overcome-accent/20 text-overcome-accent text-[10px] font-bold uppercase tracking-widest">
              <Zap size={12} /> Architecte Digital • 2026
            </div>
            <div className="flex items-center gap-2 text-text-muted text-[10px] uppercase tracking-widest font-bold">
              <MapPin size={12} /> Lubumbashi, RDC
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-display leading-[0.9] tracking-tighter">
            MANASSÉ <br />
            <span className="text-gradient">LOTAFE.</span>
          </h1>
          
          <p className="text-xl text-text-secondary max-w-lg leading-relaxed border-l-2 border-overcome-accent pl-6">
            Je transforme vos visions en produits digitaux scalables. Du SaaS éducatif à l'AgriTech, j'allie <span className="text-text-primary font-bold">ingénierie logicielle</span> et impact local.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-premium btn-primary flex items-center gap-2">
              Lancer un projet <ArrowRight size={18} />
            </button>
            <button className="btn-premium btn-outline">
              Voir le catalogue
            </button>
          </div>

          <div className="flex items-center gap-12 pt-10 border-t border-white/5">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-text-primary">10+</span>
              <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Projets</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-text-primary">99%</span>
              <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Uptime</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-text-primary">IA</span>
              <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Native</span>
            </div>
          </div>
        </motion.div>

        {/* --- PARALLAX GRID DROITE (5 COLONNES) --- */}
        <div className="lg:col-span-5 relative h-[700px] hidden lg:grid grid-cols-3 gap-4 mask-fade-edges">
          
          {/* Colonne 1 : Monte vite */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
            {column1.map((src, i) => (
              <div key={`c1-${i}`} className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card p-1 shrink-0">
                <Image 
                  src={src} 
                  alt="Manassé work" 
                  fill 
                  className={`object-cover rounded-xl transition-all duration-500 ${src.includes('me') ? 'grayscale-0' : 'opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`} 
                />
              </div>
            ))}
          </motion.div>

          {/* Colonne 2 : Descend */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 pt-20">
            {column2.map((src, i) => (
              <div key={`c2-${i}`} className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card p-1 shrink-0">
                <Image 
                  src={src} 
                  alt="Manassé work" 
                  fill 
                  className={`object-cover rounded-xl transition-all duration-500 ${src.includes('me') ? 'grayscale-0' : 'opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`} 
                />
              </div>
            ))}
          </motion.div>

          {/* Colonne 3 : Monte doucement */}
          <motion.div style={{ y: y3 }} className="flex flex-col gap-4 pt-10">
            {column3.map((src, i) => (
              <div key={`c3-${i}`} className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card p-1 shrink-0">
                <Image 
                  src={src} 
                  alt="Manassé work" 
                  fill 
                  className={`object-cover rounded-xl transition-all duration-500 ${src.includes('me') ? 'grayscale-0' : 'opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Indicateur de Scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-2"
      >
        <ChevronDown size={24} className="text-overcome-accent" />
      </motion.div>
    </section>
  )
}