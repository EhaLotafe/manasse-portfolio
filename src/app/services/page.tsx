// src/app/services/page.tsx
import ServicesSection from '@/components/ServicesSection';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services & Expertises | Manassé Eha Lotafe',
  description: 'De l\'ingénierie SaaS complexe à l\'automatisation financière via Excel/VBA. Des solutions technologiques robustes pour la RDC et l\'international.',
};

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-24 pb-12">
      
      {/* On appelle la section des services en mode "détaillé" */}
      <ServicesSection detailed={true} />

      {/* Un Call-to-Action (CTA) pour inciter le client à te contacter */}
      <div className="container-max pb-24">
        <div className="solid-card bg-[#0A0A0A] p-10 md:p-16 rounded-2xl text-center flex flex-col items-center mt-12 border-t-4 border-t-emerald-500">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Une de ces expertises correspond à votre besoin ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Que vous ayez besoin d'un audit technique, d'un MVP rapide ou de former vos équipes à de nouveaux outils, discutons-en de vive voix.
          </p>
          <Link 
            href="/#contact" 
            className="btn-premium btn-primary flex items-center gap-3 group"
          >
            Réserver une consultation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
    </main>
  );
}