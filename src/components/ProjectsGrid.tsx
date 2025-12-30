'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/projectsData'
import { Github, ExternalLink, Trophy, Code2, ArrowRight } from 'lucide-react'

// Animation pour l'apparition en cascade (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
}

export default function ProjectsGrid() {
  return (
    <section className="py-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((p) => (
          <motion.article
            key={p.id}
            variants={cardVariants}
            className="group glass-card flex flex-col h-full overflow-hidden"
          >
            {/* --- IMAGE & BADGE --- */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                <span className={`status-badge ${
                  p.status === 'Live' ? 'status-live' : 'status-dev'
                }`}>
                  {p.status}
                </span>
                <span className="bg-overcome-bg/80 backdrop-blur-md text-[10px] text-text-secondary px-2 py-1 rounded border border-white/5 font-bold uppercase tracking-tighter">
                  {p.category}
                </span>
              </div>
            </div>

            {/* --- CONTENU --- */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
              <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-overcome-accent transition-colors">
                {p.title}
              </h3>
              
              <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                {p.description}
              </p>

              {/* Box Impact (Le plus important) */}
              <div className="bg-overcome-accent/5 border border-overcome-accent/10 rounded-lg p-3 flex items-start gap-3">
                <Trophy className="w-4 h-4 text-overcome-highlight mt-0.5 flex-shrink-0" />
                <p className="text-xs text-text-primary italic font-medium">
                  {p.impact}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {p.stack.slice(0, 4).map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="flex items-center gap-1.5 text-[10px] font-bold text-text-muted bg-white/5 px-2 py-1 rounded"
                  >
                    <Code2 size={10} className="text-overcome-accent" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* --- FOOTER / ACTIONS --- */}
            <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-white/5">
              <div className="flex gap-4">
                {p.links?.github && (
                  <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" title="Code Source">
                    <Github size={18} />
                  </a>
                )}
                {p.links?.demo && (
                  <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-overcome-accent transition-colors" title="Démo Live">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <button className="text-[10px] font-bold uppercase tracking-widest text-overcome-accent flex items-center gap-2 group/btn">
                Détails <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}