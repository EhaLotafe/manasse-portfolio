// src/components/ServicesSection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { services } from '@/lib/servicesData'
import dynamic from 'next/dynamic'
import { ChevronRight, CheckCircle2 } from 'lucide-react'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

type ServicesSectionProps = {
  detailed?: boolean;
};

export default function ServicesSection({ detailed = false }: ServicesSectionProps) {
  return (
    <section className="py-24 relative border-t border-white/5 bg-[#050505]" id="services">
      <div className="container-max grid lg:grid-cols-12 gap-16 items-start">

        {/* --- COLONNE GAUCHE : TEXTE & SERVICES (7/12) --- */}
        <div className="lg:col-span-7 space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
              Expertises & <br />
              <span className="text-emerald-500">Solutions Métier.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl border-l-2 border-emerald-500 pl-4">
              {detailed
                ? "De l'ingénierie SaaS complexe à l'automatisation de vos processus financiers via Excel/VBA. Je conçois des solutions technologiques robustes, adaptées aux réalités du terrain en RDC."
                : "Je bâtis des écosystèmes numériques qui propulsent votre croissance, optimisent vos coûts et forment vos équipes."
              }
            </p>
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.li
                  key={service.id}
                  variants={itemVariants}
                  className="group solid-card p-6 flex flex-col sm:flex-row items-start gap-6 hover:border-emerald-500/30 transition-all duration-300"
                >
                  {/* Icône du service */}
                  <div className={`p-4 rounded-xl bg-[#0A0A0A] border border-white/5 ${service.color} group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all shadow-sm shrink-0`}>
                    <Icon size={28} />
                  </div>

                  {/* Contenu du service */}
                  <div className="flex-grow space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors">
                        {service.title}
                      </h4>
                      <ChevronRight
                        size={18}
                        className="text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                      />
                    </div>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Affichage des technos (Stack) liées au service */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.stack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-[#050505] px-2.5 py-1 rounded-md border border-white/5">
                          <CheckCircle2 size={10} className="text-emerald-500" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        {/* --- COLONNE DROITE : VISUEL LOTTIE (5/12) --- */}
        <div className="lg:col-span-5 hidden lg:block sticky top-32">
          <div className="relative group">
            
            {/* Le halo flou a été remplacé par une bordure stricte et professionnelle */}
            <div className="solid-card p-10 relative z-10 overflow-hidden bg-[#0A0A0A] flex flex-col items-center justify-center min-h-[500px]">
              
              <div className="w-full max-w-[300px] opacity-80 mix-blend-screen transition-opacity group-hover:opacity-100">
                <Player
                  src="/lottie/services.json"
                  autoplay
                  loop
                  style={{ height: 300, width: '100%' }}
                />
              </div>

              <div className="mt-12 text-center space-y-3 border-t border-white/5 pt-6 w-full">
                <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-500 font-bold">
                  Ingénierie & Consulting
                </p>
                <p className="text-sm text-gray-400 font-medium italic">
                  "Transformer la complexité technique en avantage concurrentiel."
                </p>
              </div>
            </div>

            {/* Décors architecturaux minimalistes */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-emerald-500/20 rounded-br-2xl transition-all group-hover:border-emerald-500/50" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-2xl transition-all group-hover:border-emerald-500/50" />
          </div>
        </div>

      </div>
    </section>
  )
}