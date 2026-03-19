// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // On s'assure qu'on est bien sur la page d'accueil pour le ScrollSpy
      if (window.location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'projects', 'contact']
        let current = ''

        for (const id of sections) {
          const section = document.getElementById(id)
          if (section) {
            const rect = section.getBoundingClientRect()
            // Logique de détection affinée pour plus de précision
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = id
              break
            }
          }
        }
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Exécution initiale pour détecter la section au chargement
    handleScroll() 
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ⚠️ AJOUT DU SLASH (/) : Indispensable pour naviguer depuis la page /projects/[id]
  const navLinks = [
    { name: 'Accueil', href: '/#home', id: 'home' },
    { name: 'À propos', href: '/#about', id: 'about' },
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'Portfolio', href: '/#projects', id: 'projects' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        mounted && scrolled 
        ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-sm' 
        : 'bg-transparent py-6'
      }`}
    >
      <div className="container-max flex items-center justify-between">
        
        {/* LOGO & BRAND (Corporate) */}
        <Link href="/#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10 group-hover:border-emerald-500/50 transition-colors bg-[#0A0A0A]">
            <Image 
              src="/logo.jpg" 
              alt="Manassé Eha Lotafe" 
              fill 
              className="object-cover"
            />
          </div>
          {/* Ajout du texte de marque à côté du logo */}
          <span className="font-display font-bold text-xl tracking-tighter text-white uppercase hidden sm:block">
            Overcome<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    mounted && activeSection === link.id ? 'text-emerald-500' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-emerald-500 transition-all duration-300 ${
                    mounted && activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          <Link 
            href="/#contact" 
            className="btn-premium btn-primary px-6 py-2.5 text-sm font-semibold"
          >
            Parlons Projet
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          aria-label="Menu Mobile"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
        >
          {mounted ? (
            open ? <X size={28} className="text-emerald-500" /> : <Menu size={28} />
          ) : (
            <div className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION MENU (OLED Black) */}
      <AnimatePresence>
        {open && mounted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="container-max flex flex-col py-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={link.href} 
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-display font-bold transition-colors ${
                    activeSection === link.id ? 'text-emerald-500' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/5">
                <Link 
                  href="/#contact" 
                  onClick={() => setOpen(false)}
                  className="btn-premium btn-primary w-full text-center py-4 text-lg"
                >
                  Démarrer un projet
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}