/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Désactive l'en-tête "X-Powered-By: Next.js" (Meilleure sécurité)
  poweredByHeader: false,

  // Optimisation du compilateur SWC (Standard Enterprise)
  compiler: {
    // Supprime automatiquement tous les console.log en production (garde uniquement les erreurs)
    // Cela évite les fuites de données et allège le JavaScript exécuté par le navigateur
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  images: {
    // Active les formats d'image Next-Gen (Crucial pour la vitesse en RDC)
    // AVIF est 20% plus léger que WebP. Vercel servira automatiquement le meilleur format.
    formats: ['image/avif', 'image/webp'],
    
    // Ajout des domaines externes que tu utilises (basé sur tes READMEs)
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '192.168.60.1', // Ton IP réseau local pour les tests API
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Vu dans ton README BioLink
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co', // Indispensable puisque tu utilises Supabase Storage
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Au cas où tu affiches des profils GitHub
      },
    ],
  },
};

module.exports = nextConfig;