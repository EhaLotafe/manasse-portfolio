'use client'

import MotionWrapper from './MotionWrapper'
import { Code2, Lightbulb, Rocket, Target, Cpu, Database } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Halo lumineux de fond */}
      <div className="hero-mesh" />

      <MotionWrapper>
        <div className="container-max space-y-24">
          
          {/* --- BIOGRAPHIE & VISION --- */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-display">
                L'ingénierie au service de <span className="text-overcome-accent">l'impact.</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Je suis <strong className="text-text-primary">Manassé Eha-lotafe</strong>, Architecte Digital spécialisé dans la conception de produits numériques à forte valeur ajoutée. 
              </p>
              <p className="text-text-secondary">
                Basé à Lubumbashi, je ne me contente pas de "coder". Je bâtis des écosystèmes : 
                du SaaS éducatif aux solutions AgriTech hybrides, en passant par l'automatisation intelligente. 
                Ma mission est de transformer les contraintes locales en opportunités technologiques scalables.
              </p>
              
              {/* Stack Technique Rapide */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <Cpu className="w-5 h-5 text-overcome-accent" />
                  TypeScript / Node.js
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <Database className="w-5 h-5 text-overcome-accent" />
                  PostgreSQL / Drizzle
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <Code2 className="w-5 h-5 text-overcome-accent" />
                  React / Next.js 14
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <Rocket className="w-5 h-5 text-overcome-accent" />
                  IA & Automation
                </div>
              </div>
            </div>

            {/* Cartes Mission / Vision */}
            <div className="grid gap-6">
              <div className="glass-card p-8 space-y-4 border-l-4 border-l-overcome-accent">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-overcome-accent" />
                  <h3 className="text-xl font-bold font-display">Ma Mission</h3>
                </div>
                <p className="text-text-secondary">
                  Démocratiser l'accès aux outils numériques d'élite pour les PME et structures locales en RDC, par des solutions pragmatiques et performantes.
                </p>
              </div>

              <div className="glass-card p-8 space-y-4 border-l-4 border-l-overcome-success">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-overcome-success" />
                  <h3 className="text-xl font-bold font-display">Ma Vision</h3>
                </div>
                <p className="text-text-secondary">
                  Devenir le pont entre l'innovation globale et le terrain local, en bâtissant une agence tech qui forme, produit et transforme.
                </p>
              </div>
            </div>
          </div>

          {/* --- PHILOSOPHIE DE TRAVAIL --- */}
          <div className="pt-10">
            <div className="section-title">
              <h2 className="text-3xl font-bold">Pourquoi travailler avec moi ?</h2>
              <div className="underline-accent" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="glass-card p-6 text-center space-y-3">
                <h4 className="font-bold text-overcome-accent">Pragmatisme</h4>
                <p className="text-sm">Je livre des produits qui fonctionnent, même dans des conditions de connectivité difficiles.</p>
              </div>
              <div className="glass-card p-6 text-center space-y-3">
                <h4 className="font-bold text-overcome-accent">Transparence</h4>
                <p className="text-sm">Chaque ligne de code répond à un besoin business précis. Pas de superflu.</p>
              </div>
              <div className="glass-card p-6 text-center space-y-3">
                <h4 className="font-bold text-overcome-accent">Évolutivité</h4>
                <p className="text-sm">Mes architectures sont conçues pour grandir avec votre entreprise, de 10 à 10 000 utilisateurs.</p>
              </div>
            </div>
          </div>

        </div>
      </MotionWrapper>
    </section>
  )
}