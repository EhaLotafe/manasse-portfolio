// src/components/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import skillsData from "../lib/skills.json";

// Typage strict de la donnée JSON
interface Skill {
  id: string;
  name: string;
  category: string;
  project: string;
  projectLink: string;
  description: string;
}

export default function SkillsSection() {
  const skills: Skill[] = skillsData;

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5" id="skills">
      <div className="container-max">
        <div className="section-title">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4"
          >
            Compétences & <span className="text-emerald-500">Expertises Récentes.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Chaque projet est une opportunité d'innover. Voici les technologies et méthodologies que j'ai maîtrisées et appliquées en production sur mes récents travaux.
          </motion.p>
          <div className="underline-accent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group solid-card p-8 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Badge Catégorie */}
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-md">
                  {skill.category}
                </span>
              </div>

              {/* Nom & Description */}
              <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-emerald-500 transition-colors">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed">
                {skill.description}
              </p>
              
              {/* Footer de la carte (Lien vers le projet) */}
              <div className="pt-5 border-t border-white/5 mt-auto">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Cas d'application :</p>
                <Link 
                  href={skill.projectLink}
                  className="inline-flex items-center text-sm font-medium text-white hover:text-emerald-500 transition-colors group/link"
                >
                  {skill.project}
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}