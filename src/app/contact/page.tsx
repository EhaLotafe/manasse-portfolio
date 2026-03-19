// src/app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

// Ajout des balises SEO (Standard de qualité Next.js 14)
export const metadata = {
  title: 'Contact | Manassé Eha Lotafe - Architecte Digital',
  description: 'Discutons de vos besoins métiers, d\'un audit de votre infrastructure ou d\'une collaboration technique en RDC et à l\'international.',
};

export default function ContactPage() {
  return (
    // min-h-screen garantit que la page fait au moins la hauteur de l'écran
    // pt-24 (padding-top) évite que la Navbar fixe ne cache le haut du formulaire
    <main className="min-h-screen bg-[#050505] pt-24 pb-12">
      {/* 
        On appelle simplement le composant ContactForm que nous avons déjà designé en mode "OLED/Émeraude" avec les animations et la logique d'email !
      */}
      <ContactForm />
    </main>
  );
}