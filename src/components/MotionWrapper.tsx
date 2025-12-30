'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function MotionWrapper({ children, delay = 0, className = "" }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true, 
        amount: 0.2 // On attend que 20% de l'élément soit visible
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        // Courbe "Premium" : démarrage rapide, fin très douce
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}