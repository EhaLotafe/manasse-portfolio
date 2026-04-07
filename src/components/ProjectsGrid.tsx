"use client"
import { motion, Variants } from 'framer-motion' // ⚠️ AJOUT DE "Variants" ICI
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projectsData'
import { Github, ExternalLink, Trophy, Code2, ArrowRight } from 'lucide-react'

// ⚠️ AJOUT DU TYPE ": Variants" ICI
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

// ⚠️ AJOUT DU TYPE ": Variants" ICI
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}
interface ProjectsGridProps {
  showAll?: boolean;
}

// ⚠️ CORRECTION : On passe { showAll = false } comme propriété au composant
export default function ProjectsGrid({ showAll = false }: ProjectsGridProps) {
  
  // ⚠️ CORRECTION : Si showAll est true, on prend TOUS les projets. 
  // Sinon, on filtre pour ne garder que ceux qui ont "featured: true".
  const displayProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section className="py-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* ⚠️ CORRECTION : On boucle (map) sur displayProjects au lieu de featuredProjects */}
        {displayProjects.map((p) => (
          <motion.article
            key={p.id}
            variants={cardVariants}
            className="group solid-card flex flex-col h-full overflow-hidden bg-[#0A0A0A]"
          >
            {/* --- IMAGE & BADGE --- */}
            <div className="relative h-52 w-full overflow-hidden border-b border-white/5">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                <span className={`status-badge ${
                  p.status === 'Live' ? 'status-live' : 'status-dev'
                }`}>
                  {p.status}
                </span>
                <span className="bg-[#050505]/80 backdrop-blur-md text-[10px] text-gray-300 px-2 py-1 rounded border border-white/10 font-bold uppercase tracking-widest">
                  {p.category}
                </span>
              </div>
            </div>

            {/* --- CONTENU --- */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
              <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-500 transition-colors">
                {p.title}
              </h3>
              
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                {p.description}
              </p>

              {/* Box Impact (Excellent pour le B2B) */}
              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3 flex items-start gap-3 mt-auto">
                <Trophy className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-300 italic font-medium leading-relaxed">
                  {p.impact}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {p.stack.slice(0, 4).map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-white/5 border border-white/5 px-2 py-1 rounded-md"
                  >
                    <Code2 size={10} className="text-emerald-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* --- FOOTER / ACTIONS --- */}
            <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
              <div className="flex gap-4 pt-4">
                {p.links?.github && (
                  <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Code Source">
                    <Github size={18} />
                  </a>
                )}
                {p.links?.demo && (
                  <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors" title="Démo Live">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <Link 
                href={`/projects/${p.id}`}
                className="pt-4 text-[11px] font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 flex items-center gap-2 group/btn"
              >
                Étude de cas <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}