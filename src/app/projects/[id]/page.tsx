// src/app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '@/lib/projectsData';

// Générer les routes statiques pour Vercel (Optimisation SEO & Vitesse)
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  // Trouver le projet correspondant à l'URL
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // Redirige vers la page 404 de Next.js si l'ID n'existe pas
  }

  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 py-20">
      <div className="container-max">
        
        {/* Bouton Retour */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux projets
        </Link>

        {/* En-tête du Projet */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
              project.status === 'Live' ? 'border-emerald-500/30 text-emerald-400' : 'border-amber-500/30 text-amber-400'
            }`}>
              {project.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image Principale (Bannière) */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 border border-white/5">
          <Image 
            src={project.image} 
            alt={`Aperçu de ${project.title}`} 
            fill
            className="object-cover"
            priority // Charge cette image en priorité pour les perfs Vercel
          />
          {/* Overlay subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Contenu Principal - Grille 2/3 (Description) et 1/3 (Détails) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Colonne de gauche : L'Étude de Cas (longDescription) */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">
              Vision & Architecture
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              {/* On découpe la longDescription par les retours à la ligne pour créer des paragraphes */}
              {project.longDescription ? (
                project.longDescription.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))
              ) : (
                <p>Les détails architecturaux de ce projet sont en cours de rédaction.</p>
              )}
            </div>

            <div className="mt-12 bg-[#121212] border border-white/5 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-500 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                Impact Business & Local
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Colonne de droite : Stack technique et Liens */}
          <div className="space-y-8">
            {/* Stack Technique */}
            <div className="solid-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Technologies Utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-white/5 border border-white/10 text-gray-300 text-sm px-3 py-1.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Liens d'action */}
            {(project.links?.demo || project.links?.github) && (
              <div className="solid-card p-6 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-white mb-2">Liens du Projet</h3>
                
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-premium btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Voir la Démo Live
                  </a>
                )}

                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-premium btn-outline w-full flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    Code Source GitHub
                  </a>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}