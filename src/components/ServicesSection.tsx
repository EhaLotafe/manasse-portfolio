'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/servicesData'
import dynamic from 'next/dynamic'
import { ChevronRight } from 'lucide-react'

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
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

type ServicesSectionProps = {
  detailed?: boolean;
};

export default function ServicesSection({ detailed = false }: ServicesSectionProps) {
  return (
    <section className="py-12 relative">
      <div className="grid lg:grid-cols-12 gap-12 items-center">

        {/* --- COLONNE GAUCHE : TEXTE & SERVICES (7/12) --- */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              Solutions <span className="text-overcome-accent">Sur-mesure.</span>
            </h2>

            <p className="text-text-secondary text-lg max-w-2xl">
              {detailed
                ? "De l'ingénierie logicielle à l'intelligence artificielle, je conçois et développe des solutions technologiques avancées adaptées à vos besoins métiers."
                : "Je bâtis des outils numériques qui propulsent votre croissance."
              }
            </p>
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.li
                  key={service.id}
                  variants={itemVariants}
                  className="group glass-card p-5 flex items-start gap-5 hover:bg-overcome-accent/5 transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-white/5 ${service.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>

                  <div className="flex-grow space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-text-primary group-hover:text-overcome-accent transition-colors">
                        {service.title}
                      </h4>
                      <ChevronRight
                        size={16}
                        className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        {/* --- COLONNE DROITE : VISUEL LOTTIE (5/12) --- */}
        <div className="lg:col-span-5 hidden lg:block sticky top-32">
          <div className="relative group">
            <div className="absolute inset-0 bg-overcome-accent/10 blur-[80px] rounded-full group-hover:bg-overcome-accent/20 transition-colors duration-700" />

            <div className="glass-card p-10 relative z-10 overflow-hidden">
              <Player
                src="/lottie/services.json"
                autoplay
                loop
                style={{ height: 400, width: '100%' }}
                className="drop-shadow-2xl"
              />

              <div className="mt-8 text-center space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-overcome-accent font-bold">
                  Innovation Lab
                </p>
                <p className="text-sm text-text-muted font-medium italic">
                  "Transformer la complexité en simplicité."
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-overcome-accent/20 rounded-br-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-overcome-accent/20 rounded-tl-3xl" />
          </div>
        </div>

      </div>
    </section>
  )
}