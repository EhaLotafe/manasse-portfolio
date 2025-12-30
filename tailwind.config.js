/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* === Palette Overcome 2026 (Premium Dark) === */
      colors: {
        overcome: {
          bg: "#0E1116",        // Fond profond
          secondary: "#151A22", // Sections secondaires
          card: "#1B2230",      // Fond des cartes (Glassmorphism)
          accent: "#3B82F6",    // Bleu Action (le "Linker")
          success: "#22C55E",   // Vert (Impact / Live)
          highlight: "#F59E0B", // Or/Ambre (Focus / Premium)
        },
        text: {
          primary: "#E8ECF1",   // Titres et texte important
          secondary: "#A7B0C0", // Descriptions
          muted: "#6F7A8A",      // Détails techniques
        }
      },

      /* === Typographies 2026 === */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"], // Pour les titres h1, h2, h3
      },

      /* === Radius 2026 (Sobriété & Design) === */
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',  // Le standard pour tes cartes
        '2xl': '24px',
      },

      /* === Animations subtiles === */
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      boxShadow: {
        'glow': '0 0 20px -5px rgba(59, 130, 246, 0.5)',
      },

      /* === Breakpoints === */
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};