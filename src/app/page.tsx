
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import ContactForm from '@/components/ContactForm'
import MotionWrapper from '@/components/MotionWrapper'

export default function Home() {
  return (
    <main className="relative bg-overcome-bg">
      {/* 1. HERO - L'impact immédiat (ID interne géré dans le composant) */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 2. À PROPOS - L'identité et la vision */}
      <section id="about" className="py-24 relative overflow-hidden bg-overcome-bg">
        <div className="container-max">
          <AboutSection />
        </div>
      </section>

      {/* 3. SERVICES - L'expertise technique */}
      <section id="services" className="py-24 bg-overcome-secondary/30 relative">
        <div className="container-max">
          <MotionWrapper>
            <div className="section-title text-left md:text-center">
              <h2 className="text-white">Expertises & <span className="text-overcome-accent">Solutions</span></h2>
              <div className="underline-accent md:mx-auto" />
              <p className="mt-6 text-text-secondary max-w-2xl md:mx-auto">
                De l'idée au déploiement, j'accompagne les entreprises dans leur transformation numérique avec des outils sur-mesure et performants.
              </p>
            </div>
          </MotionWrapper>
          <ServicesSection />
        </div>
      </section>

      {/* 4. PROJETS - La preuve par l'action */}
      <section id="projects" className="py-24 bg-overcome-bg">
        <div className="container-max">
          <MotionWrapper>
            <div className="section-title">
              <h2 className="text-white">Sélection de <span className="text-overcome-accent">Projets</span></h2>
              <div className="underline-accent" />
              <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
                Découvrez comment je résous des problèmes complexes à travers des architectures logicielles modernes et un design centré utilisateur.
              </p>
            </div>
          </MotionWrapper>
          
          <ProjectsGrid />
        </div>
      </section>

      {/* 5. CONTACT - Le point de départ */}
      <section id="contact" className="py-24 bg-overcome-secondary/50 relative border-t border-white/5">
        <div className="container-max">
          <MotionWrapper>
            <div className="section-title">
              <h2 className="text-white">Démarrer une <span className="text-overcome-accent">Collaboration</span></h2>
              <div className="underline-accent" />
              <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
                Prêt à digitaliser votre activité ou à construire votre prochain SaaS ? Envoyez-moi un message et bâtissons quelque chose d'exceptionnel.
              </p>
            </div>
          </MotionWrapper>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}