/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* === Palette Architecte Digital 2026 (Premium OLED) === */
      colors: {
        overcome: {
          bg: "#050505",        // Noir Absolu (OLED) - Performance & Sobriété
          secondary: "#0A0A0A", // Sections secondaires
          card: "#121212",      // Gris très foncé pour les cartes (Solid)
          accent: "#10B981",    // Vert Émeraude (Croissance, Finance, AgriConnect)
          accentHover: "#059669",// Émeraude foncé pour le hover des boutons
          success: "#10B981",   // Vert (Impact / Live)
          highlight: "#F59E0B", // Or/Ambre (Prestige / Weylandts)
        },
        text: {
          primary: "#F3F4F6",   // Blanc cassé (Évite la fatigue visuelle B2B)
          secondary: "#9CA3AF", // Descriptions claires
          muted: "#6B7280",     // Détails techniques et labels
        }
      },

      /* === Typographies === */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"], // Titres Tech/Data
      },

      /* === Radius B2B (Moins ronds, plus sérieux) === */
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',   // Boutons standard
        'xl': '12px',  // Cartes Projets/Services
        '2xl': '16px',
      },

      /* === Ombres Corporate (Élévation, pas de Néon) === */
      boxShadow: {
        'elevation': '0 10px 30px -10px rgba(0, 0, 0, 0.8)', // Ombre douce vers le bas
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
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