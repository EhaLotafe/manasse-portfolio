// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* === Palette cohérente avec globals.css === */
      colors: {
        navy: "#003B5C",
        blue: "#007EA7",
        teal: "#00A8C6",
        green: "#57B66F",
        dark: "#1A1A1A",
        gray: "#6B7280",
        light: "#F7F9FA",
        white: "#FFFFFF",
        gold: "#DAA520",
      },

      /* === Typographies === */
      fontFamily: {
        sans: ["Work Sans", "system-ui", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },

      /* === Radius / Shadows / Transitions === */
      borderRadius: {
        sm: "0.375rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        sm: "0 4px 6px rgba(0,0,0,0.05)",
        md: "0 10px 20px rgba(0,0,0,0.08)",
        lg: "0 20px 40px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
      },

      /* === Grille & Spacings === */
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        48: "12rem",
      },

      /* === Breakpoints === */
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  /* === Plugins utiles === */
  plugins: [
    require("@tailwindcss/forms"), // meilleure apparence des <input>, <select>, etc.
    require("@tailwindcss/typography"), // typographie améliorée (prose, textes longs)
    require("@tailwindcss/aspect-ratio"), // gestion responsive des images/vidéos
  ],
};
