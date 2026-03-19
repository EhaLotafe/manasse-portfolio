// src/components/SplashScreen.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // OPTIMISATION B2B : On réduit l'attente à 1.8 secondes. 
    // Les professionnels n'ont pas de temps à perdre.
    const timer = setTimeout(() => setVisible(false), 1800);
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
            y: "-100%", // La page "glisse" vers le haut de manière abrupte (style logiciel)
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#050505] z-[9999]"
        >
          {/* Conteneur de l'animation Lottie (Net et sans néon flou) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Player
              autoplay
              loop
              src="/lottie/loader.json"
              style={{ height: 200, width: 200 }} // Légèrement réduit pour faire plus "pro"
            />
          </motion.div>

          {/* Texte de Branding */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-16 flex flex-col items-center gap-4"
          >
            <h1 className="text-white text-xl font-display font-bold tracking-[0.3em] uppercase flex gap-2">
              Overcome <span className="text-emerald-500">Solution</span>
            </h1>
            
            {/* Barre de progression ultra-fine (Style Apple/Vercel) */}
            <div className="h-[1px] w-32 bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/3 bg-emerald-500"
              />
            </div>
            
            <p className="text-gray-500 text-[9px] uppercase tracking-[0.3em] font-semibold mt-1">
              Architecture Digitale • 2026
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}