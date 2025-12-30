'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // ÉTAPE 1 : État pour vérifier le montage côté client
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // ÉTAPE 2 : On confirme que le client est prêt
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'projects', 'services', 'contact']
      let current = 'home'

      for (const id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'À propos', id: 'about' },
    { name: 'Projets', id: 'projects' },
    { name: 'Services', id: 'services' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        mounted && scrolled // On vérifie mounted ici
        ? 'bg-overcome-bg/80 backdrop-blur-lg border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between">
        
        {/* LOGO & BRAND */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10 group-hover:border-overcome-accent/50 transition-colors">
            <Image 
              src="/logo.jpg" 
              alt="Overcome logo" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-text-primary uppercase">
            <span className="text-overcome-accent"></span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={`#${link.id}`}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    mounted && activeSection === link.id ? 'text-overcome-accent' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-overcome-accent transition-all duration-300 ${
                    mounted && activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          <Link 
            href="#contact" 
            className="btn-premium btn-primary px-5 py-2 text-sm"
          >
            Parlons Projet
          </Link>
        </nav>

        {/* MOBILE TOGGLE - CORRIGÉ POUR L'HYDRATION */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-primary hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
        >
          {mounted ? (
            open ? <X size={28} /> : <Menu size={28} />
          ) : (
            // Placeholder invisible de même taille pour éviter le saut visuel
            <div className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION MENU */}
      <AnimatePresence>
        {open && mounted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-overcome-secondary border-b border-white/5 overflow-hidden"
          >
            <div className="container-max flex flex-col py-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-display font-bold ${
                    activeSection === link.id ? 'text-overcome-accent' : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setOpen(false)}
                className="btn-premium btn-primary w-full text-center py-4 text-lg"
              >
                Démarrer un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}