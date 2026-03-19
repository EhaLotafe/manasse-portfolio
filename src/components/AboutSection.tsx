// src/components/AboutSection.tsx
'use client'

import MotionWrapper from './MotionWrapper'
import { Code2, Lightbulb, Rocket, Target, Cpu, Database } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-overcome-bg" id="about">
      {/* Suppression du halo lumineux (hero-mesh) pour un look plus "Cabinet de Consulting" */}

      <MotionWrapper>
        <div className="container-max space-y-24">
          
          {/* --- BIOGRAPHIE & VISION --- */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
                L'ingénierie au service de <span className="text-overcome-accent">l'impact.</span>
              </h2>
              
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                <p>
                  Je suis <strong className="text-white font-semibold">Manassé Eha Lotafe</strong>, Architecte Digital spécialisé dans la conception de produits numériques à forte valeur ajoutée. 
                </p>
                <p>
                  Basé à Lubumbashi, je ne me contente pas de "coder". Je bâtis des écosystèmes : 
                  du SaaS éducatif aux solutions AgriTech hybrides, en passant par l'automatisation intelligente d'entreprise (Excel/VBA/Python). 
                </p>
                <p>
                  Ma mission est de transformer les contraintes locales (faible connectivité, paiements mobiles) en opportunités technologiques scalables.
                </p>
              </div>
              
              {/* Stack Technique Rapide (Design Enterprise) */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <div className="p-2 bg-overcome-accent/10 rounded-lg">
                    <Cpu className="w-5 h-5 text-overcome-accent" />
                  </div>
                  TypeScript / Node.js
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <div className="p-2 bg-overcome-accent/10 rounded-lg">
                    <Database className="w-5 h-5 text-overcome-accent" />
                  </div>
                  PostgreSQL / Supabase
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <div className="p-2 bg-overcome-accent/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-overcome-accent" />
                  </div>
                  React / Next.js 14
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <div className="p-2 bg-overcome-accent/10 rounded-lg">
                    <Rocket className="w-5 h-5 text-overcome-accent" />
                  </div>
                  IA & Automation
                </div>
              </div>
            </div>

            {/* Cartes Mission / Vision */}
            <div className="grid gap-6">
              <div className="solid-card p-8 space-y-4 border-l-4 border-l-overcome-accent">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-overcome-accent" />
                  <h3 className="text-xl font-bold font-display text-white">Ma Mission</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Démocratiser l'accès aux outils numériques d'élite pour les PME et structures locales en RDC, par des solutions pragmatiques et performantes.
                </p>
              </div>

              {/* Changement de couleur ici (Ambre) pour créer un joli contraste avec l'Émeraude */}
              <div className="solid-card p-8 space-y-4 border-l-4 border-l-overcome-highlight">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-overcome-highlight" />
                  <h3 className="text-xl font-bold font-display text-white">Ma Vision</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Devenir le pont entre l'innovation globale et le terrain local, en bâtissant une agence tech qui forme, produit et transforme.
                </p>
              </div>
            </div>
          </div>

          {/* --- PHILOSOPHIE DE TRAVAIL --- */}
          <div className="pt-16 border-t border-white/5">
            <div className="section-title">
              <h2 className="text-3xl font-bold text-white">Pourquoi travailler avec moi ?</h2>
              <div className="underline-accent" />
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="solid-card p-8 text-center space-y-4 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-overcome-accent/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-overcome-accent font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-white text-lg">Pragmatisme Local</h4>
                <p className="text-sm text-text-secondary">Je livre des produits qui fonctionnent réellement sur le terrain, même avec des connexions 3G instables (Offline-First).</p>
              </div>
              
              <div className="solid-card p-8 text-center space-y-4 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-overcome-accent/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-overcome-accent font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-white text-lg">Transparence</h4>
                <p className="text-sm text-text-secondary">Chaque ligne de code répond à un besoin business précis. Pas de superflu, juste du retour sur investissement.</p>
              </div>
              
              <div className="solid-card p-8 text-center space-y-4 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-overcome-accent/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-overcome-accent font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-white text-lg">Évolutivité</h4>
                <p className="text-sm text-text-secondary">Mes architectures SaaS sont conçues pour grandir avec votre entreprise, de 10 à 10 000 utilisateurs quotidiens.</p>
              </div>
            </div>
          </div>

        </div>
      </MotionWrapper>
    </section>
  )
}