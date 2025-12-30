// Déclarations pour les fichiers d'animation Lottie
declare module "*.json" {
  const value: any;
  export default value;
}

// Déclarations pour les formats d'images
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.HEIC";
declare module "*.webp";

// Déclaration pour les modules Next.js spécifiques si nécessaire
declare module 'next/types.js';