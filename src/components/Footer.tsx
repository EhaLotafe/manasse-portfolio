// src/components/Footer.tsx
"use client";

import React, { ElementType } from "react";
import { motion } from "framer-motion";
import { 
  FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaShoppingBag 
} from "react-icons/fa";
import { 
  Mail, Phone, Globe, ArrowUpRight, Cpu, Layers, ExternalLink 
} from "lucide-react";

// --- Typage Strict (Fini le "any") ---
interface FooterLinkProps {
  href: string;
  icon: ElementType; // Accepte les icônes de lucide-react et react-icons
  text: string;
  external?: boolean;
}

// --- Sous-composant pour les liens (Design Solid) ---
const FooterLink = ({ href, icon: Icon, text, external = true }: FooterLinkProps) => (
  <a
    href={href}
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : undefined}
    className="group flex items-center justify-between p-3 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-overcome-accent/30 hover:bg-overcome-accent/5 transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      <Icon className="text-gray-500 group-hover:text-overcome-accent transition-colors" size={16} />
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{text}</span>
    </div>
    <ArrowUpRight size={14} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  </a>
);

// --- Animation des colonnes ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pt-20 pb-10 border-t border-white/5 bg-[#050505]">
      {/* Suppression du fond flou (blur) lourd pour les performances mobiles */}

      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* --- COLONNE 1 : BRANDING --- */}
          <motion.div 
            custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              {/* Logo "Solid" sans effet néon */}
              <div className="w-10 h-10 rounded-lg bg-overcome-accent/10 border border-overcome-accent/20 flex items-center justify-center text-overcome-accent">
                <Cpu size={22} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white uppercase">
                Overcome<span className="text-overcome-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Architecte Digital & Développeur Fullstack. <br />
              Je conçois des solutions numériques pragmatiques, scalables et centrées sur l'impact (RDC & Afrique).
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/EhaLotafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/5 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/eha-lotafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/5 text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://www.facebook.com/manasse.eha.lotafe" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/5 text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-all"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* --- COLONNE 2 : ÉCOSYSTÈME --- */}
          <motion.div custom={1} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
              <Layers size={14} /> Écosystème
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/" icon={Globe} text="Portfolio Principal" external={false} />
              <FooterLink href="https://github.com/EhaLotafe?tab=repositories" icon={ExternalLink} text="Open Source Lab" />
            </div>
          </motion.div>

          {/* --- COLONNE 3 : PRODUITS --- */}
          <motion.div custom={2} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
              <FaShoppingBag size={12} /> Produits & IA
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="https://iapductk.mychariow.shop" icon={FaShoppingBag} text="IA Resources Shop" />
              <FooterLink href="https://osazgjlt.mychariow.shop" icon={FaShoppingBag} text="Overcome Shop" />
              <FooterLink href="https://wa.me/243817517378" icon={FaWhatsapp} text="Consultation Digital" />
            </div>
          </motion.div>

          {/* --- COLONNE 4 : CONTACT --- */}
          <motion.div custom={3} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
              <Mail size={14} /> Contact Direct
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="mailto:overcomeeha@gmail.com" icon={Mail} text="overcomeeha@gmail.com" external={false} />
              <FooterLink href="tel:+243817517378" icon={Phone} text="+243 817 517 378" external={false} />
              <FooterLink href="https://wa.me/243817517378" icon={FaWhatsapp} text="WhatsApp Business" />
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-gray-500">
          <p>© {currentYear} Overcome Solution. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2 font-medium">
              Engineered in Lubumbashi by <span className="text-white">Manassé Eha Lotafe</span>
            </p>
            {/* Versionning (Excellente idée, ça fait très "Software") */}
            <p className="font-mono text-overcome-accent bg-overcome-accent/10 border border-overcome-accent/20 px-2 py-1 rounded">
              v2.0.26
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}