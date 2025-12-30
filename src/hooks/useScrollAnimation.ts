'use client'

import { useEffect, useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'

/**
 * Hook personnalisé pour déclencher des animations au scroll
 * @param threshold - Pourcentage de visibilité requis (0.2 = 20%)
 * @param once - Si l'animation ne doit se jouer qu'une seule fois
 */
export default function useScrollAnimation(threshold = 0.2, once = true) {
  const controls = useAnimation()
  
  // Correction TypeScript : On précise que la ref pointera vers un Element HTML
  // On utilise <any> ici pour une compatibilité maximale avec les différents types de balises (div, section, etc.)
  const ref = useRef<any>(null)
  
  const isInView = useInView(ref, { 
    amount: threshold, 
    once: once 
  })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      if (!once) {
        controls.start("hidden")
      }
    }
  }, [controls, isInView, once])

  return { ref, controls, isInView }
}