// src/hooks/useScrollAnimation.ts
'use client'

import { useEffect, useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'

export default function useScrollAnimation(threshold = 0.2, once = true) {
  const controls = useAnimation()
  
  const ref = useRef<HTMLElement>(null)
  
  // CORRECTION : On précise à Framer Motion que ref est bien un élément HTML
  const isInView = useInView(ref as React.RefObject<HTMLElement>, { 
    amount: threshold, 
    once: once 
  })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, isInView, once])

  return { ref, controls, isInView }
}