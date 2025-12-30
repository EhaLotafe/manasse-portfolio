"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaShoppingBag 
} from "react-icons/fa";
import { 
  Mail, Phone, Globe, ArrowUpRight, Cpu, Layers, ExternalLink 
} from "lucide-react";

// --- Animation des colonnes ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

// --- Sous-composant pour les liens ---
const FooterLink = ({ href, icon: Icon, text, external = true }: any) => (
  <a
    href={href}
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : undefined} // Correction Sécurité
    className="group flex items-center justify-between p-3 rounded-xl bg-overcome-secondary/30 border border-white/5 hover:border-overcome-accent/30 hover:bg-overcome-accent/5 transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      <Icon className="text-text-muted group-hover:text-overcome-accent transition-colors" size={18} />
      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{text}</span>
    </div>
    <ArrowUpRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden border-t border-white/5 bg-overcome-bg">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-overcome-accent/5 blur-[120px] -z-10" />

      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* --- COLONNE 1 : BRANDING --- */}
          <motion.div 
            custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-overcome-accent flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Cpu size={24} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-text-primary uppercase">
                Overcome<span className="text-overcome-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Architecte Digital & Développeur Fullstack. <br />
              Je conçois des solutions numériques pragmatiques, scalables et centrées sur l'impact en RDC.
            </p>
            <div className="flex gap-4">
              {/* Correction Accessibilité (aria-label) et Sécurité (rel) */}
              <a 
                href="https://github.com/EhaLotafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Voir mon profil GitHub"
                className="p-2.5 rounded-lg bg-white/5 text-text-muted hover:text-overcome-accent hover:bg-overcome-accent/10 transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/eha-lotafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Suivre mon profil LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 text-text-muted hover:text-overcome-accent hover:bg-overcome-accent/10 transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/manasse.eha.lotafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Me contacter sur Facebook"
                className="p-2.5 rounded-lg bg-white/5 text-text-muted hover:text-overcome-accent hover:bg-overcome-accent/10 transition-all"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* --- COLONNE 2 : ÉCOSYSTÈME --- */}
          <motion.div custom={1} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-overcome-accent flex items-center gap-2">
              <Layers size={14} /> Écosystème
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="https://portfolio-catalog.vercel.app/" icon={Globe} text="Portfolio Principal" />
              <FooterLink href="https://github.com/EhaLotafe?tab=repositories" icon={ExternalLink} text="Open Source Lab" />
            </div>
          </motion.div>

          {/* --- COLONNE 3 : PRODUITS --- */}
          <motion.div custom={2} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-overcome-success flex items-center gap-2">
              <FaShoppingBag size={12} /> Produits & IA
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="https://iapductk.mychariow.shop" icon={FaShoppingBag} text="IA Resources Shop" />
              <FooterLink href="https://osazgjlt.mychariow.shop" icon={FaShoppingBag} text="Overcome Shop" />
              <FooterLink href="https://wa.me/243990918934" icon={FaWhatsapp} text="Consultation Digital" />
            </div>
          </motion.div>

          {/* --- COLONNE 4 : CONTACT --- */}
          <motion.div custom={3} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-overcome-highlight flex items-center gap-2">
              <Mail size={14} /> Contact Direct
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="mailto:overcomeeha@gmail.com" icon={Mail} text="overcomeeha@gmail.com" external={false} />
              <FooterLink href="tel:+243817517378" icon={Phone} text="+243 817 517 378" external={false} />
              <FooterLink href="https://wa.me/243990918934" icon={FaWhatsapp} text="WhatsApp Business" />
            </div>
          </motion.div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-text-muted">
          <p>© {currentYear} Overcome Solution. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              Bâti par <span className="text-red-500 animate-pulse">Eha Lotafe</span> à Lubumbashi
            </p>
            <p className="font-mono text-overcome-accent/50 bg-overcome-accent/5 px-2 py-1 rounded">
              v2.0.26
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}