import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import DynamicSplashScreen from "@/components/DynamicSplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configuration du Viewport pour mobile (sécurité visuelle)
export const viewport: Viewport = {
  themeColor: "#0E1116",
  width: "device-width",
  initialScale: 1,
};

// Métadonnées pour le SEO (Référencement)
export const metadata: Metadata = {
  title: "Overcome Solution | Architecte Digital & Fullstack Dev",
  description: "Solutions numériques pragmatiques, SaaS éducatifs et IA appliquée. Basé à Lubumbashi, RDC. Bâtir l'avenir digital par l'ingénierie.",
  keywords: ["Développeur Fullstack", "Lubumbashi", "RDC", "SaaS", "IA", "Architecture Digital", "Next.js", "Manassé Eha"],
  authors: [{ name: "Manassé Eha-lotafe", url: "https://github.com/EhaLotafe" }],
  openGraph: {
    title: "Overcome Solution | Manassé Eha-lotafe",
    description: "Architecte Digital & Fullstack Developer à Lubumbashi.",
    url: "https://portfolio-catalog.vercel.app/",
    siteName: "Overcome Solution",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overcome Solution",
    description: "Architecte Digital & Fullstack Developer",
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
      <body className="bg-overcome-bg text-text-primary antialiased selection:bg-overcome-accent/30 selection:text-overcome-accent">
        
        {/* Écran de chargement initial */}
        <DynamicSplashScreen />

        {/* Barre de navigation fixe */}
        <Navbar />

        {/* Contenu principal de la page */}
        <main className="min-h-screen relative">
          {children}
        </main>

        {/* Pied de page */}
        <Footer />

      </body>
    </html>
  );
}