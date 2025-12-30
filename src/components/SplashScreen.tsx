"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // On laisse l'animation respirer 3 secondes
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Sécurité d'hydratation Next.js
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -50, // Glissement vers le haut à la sortie
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-overcome-bg z-[9999]"
        >
          {/* Conteneur de l'animation Lottie */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Player
              autoplay
              loop
              src="/lottie/loader.json"
              style={{ height: 250, width: 250 }}
            />
            {/* Effet de lueur derrière le loader */}
            <div className="absolute inset-0 bg-overcome-accent/20 blur-[60px] rounded-full -z-10" />
          </motion.div>

          {/* Texte de Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-20 flex flex-col items-center gap-3"
          >
            <h1 className="text-white text-2xl font-display font-bold tracking-[0.3em] uppercase">
              Overcome <span className="text-overcome-accent">Solution</span>
            </h1>
            
            {/* Barre de progression stylisée (purement visuelle) */}
            <div className="h-[2px] w-24 bg-white/10 relative overflow-hidden rounded-full">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/2 bg-overcome-accent"
              />
            </div>
            
            <p className="text-text-muted text-[10px] uppercase tracking-[0.2em] mt-2">
              Digital Architecture • 2026
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}