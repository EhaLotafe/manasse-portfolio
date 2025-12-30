// 1. Déclarations pour le CSS et les styles
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// 2. Déclarations pour les fichiers multimédias (Images & Lottie)
declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.webp";
declare module "*.ico";

// 3. Déclarations pour les bibliothèques d'animation (si les types manquent)
declare module "lottie-react";
declare module "@lottiefiles/react-lottie-player";

// 4. Augmentation des types Framer Motion (si nécessaire pour tes composants)
import "framer-motion";

declare module "framer-motion" {
  export interface MotionProps {
    className?: string;
  }
}