// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import DynamicSplashScreen from "@/components/DynamicSplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configuration du Viewport pour mobile (sécurité visuelle - Noir OLED)
export const viewport: Viewport = {
  themeColor: "#050505", // Change la couleur de la barre d'adresse sur mobile
  width: "device-width",
  initialScale: 1,
};

// Métadonnées Premium B2B pour le SEO (Référencement Google & Partage social)
export const metadata: Metadata = {
  title: "Manassé Eha Lotafe | Architecte de Solutions Digitales",
  description: "Concepteur de plateformes intelligentes, SaaS et automatisation métier (IA, VBA). Solutions robustes et Offline-First pour la RDC et l'Afrique.",
  keywords: [
    "Architecte Digital", 
    "Développeur Fullstack RDC", 
    "Lubumbashi", 
    "Création SaaS", 
    "Automatisation Excel VBA", 
    "Intégration IA", 
    "Manassé Eha Lotafe"
  ],
  authors: [{ name: "Manassé Eha Lotafe", url: "https://github.com/EhaLotafe" }],
  openGraph: {
    title: "Overcome Solution | Manassé Eha Lotafe",
    description: "Architecte de Solutions Digitales & Développeur Fullstack à Lubumbashi.",
    url: "https://portfolio-catalog.vercel.app/",
    siteName: "Overcome Solution",
    locale: "fr_FR",
    type: "website",
    // Assure-toi d'avoir une belle image "og-image.jpg" dans ton dossier public un jour pour les partages WhatsApp !
  },
  twitter: {
    card: "summary_large_image",
    title: "Overcome Solution - Architecture Digitale",
    description: "Architecte de Solutions Digitales & Développeur Fullstack",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#050505] text-gray-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-500">
        
        {/* Écran de chargement initial (B2B Rapide) */}
        <DynamicSplashScreen />

        {/* Barre de navigation fixe */}
        <Navbar />

        {/* Contenu principal de la page */}
        <main className="min-h-screen relative flex flex-col">
          {children}
        </main>

        {/* Pied de page */}
        <Footer />

      </body>
    </html>
  );
}