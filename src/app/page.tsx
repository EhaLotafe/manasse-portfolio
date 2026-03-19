// src/app/page.tsx
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import SkillsSection from '@/components/SkillsSection'
import ContactForm from '@/components/ContactForm'
import MotionWrapper from '@/components/MotionWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative bg-[#050505] flex flex-col min-h-screen">
      
      {/* 1. HERO - L'impact immédiat */}
      <div id="home">
        <HeroSection />
      </div>

      {/* 2. À PROPOS - L'identité et la vision */}
      <AboutSection />

      {/* 3. SERVICES - L'expertise technique */}
      <ServicesSection detailed={false} />

      {/* 4. PROJETS (VITRINE) - La preuve par l'action */}
      <section id="projects" className="py-24 bg-[#0A0A0A] border-y border-white/5 relative">
        <div className="container-max">
          <MotionWrapper>
            <div className="section-title">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
                Sélection de <span className="text-emerald-500">Projets.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Découvrez comment je résous des problèmes complexes à travers des architectures logicielles modernes (Offline-First, SaaS, IA).
              </p>
              <div className="underline-accent mt-6" />
            </div>
          </MotionWrapper>
          
          <div className="mt-16">
            {/* showAll={false} par défaut, donc ça n'affiche que tes 5 meilleurs projets */}
            <ProjectsGrid />
          </div>

          <MotionWrapper delay={0.2} className="mt-16 text-center">
            <Link 
              href="/projects" 
              className="btn-premium btn-outline inline-flex items-center gap-2 group hover:bg-white/5"
            >
              Explorer le portfolio complet
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* 5. SKILLS - Le système JSON dynamique que tu as demandé */}
      <SkillsSection />

      {/* 6. CONTACT - Le tunnel de vente */}
      <ContactForm />

    </main>
  )
}