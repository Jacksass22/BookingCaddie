import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Brand Colors
        "defiant-blue": "#0072CE",
        "electric-blue": "#3B82F6",
        "cyan-accent": "#06B6D4",
        "steel-blue": "#415573",

        // Orb / Visual Identity
        "orb-silver": "#94a3b8",
        "orb-blue": "#60a5fa",
        "orb-grey": "#475569",

        // Dark Theme Foundation
        "navy": "#273142",
        "charcoal": "#3A4A5C",
        "dark-bg": "#0A0A0F",
        "acquisition-dark": "#0d1117",

        // Steel blues for text/UI
        "steel": {
          light: "#8aa5d4",
          DEFAULT: "#6b8bb8",
          dark: "#5a7aa0",
        },

        // Periwinkle gradient range
        "periwinkle": {
          light: "#a3b5ff",
          DEFAULT: "#7b9bd1",
          dark: "#6b8bb8",
        },

        // Primary alias (blue scale)
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3B82F6",
          600: "#0072CE",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-cyan": "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15), transparent 70%)",
        "glow-blue": "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15), transparent 70%)",
      },
      boxShadow: {
        "glow": "0 0 40px rgba(159, 232, 255, 0.18)",
        "glow-sm": "0 0 20px rgba(159, 232, 255, 0.12)",
        "glow-lg": "0 0 60px rgba(159, 232, 255, 0.25)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.25)",
        "rim": "inset 0 1px 1px rgba(200, 238, 247, 0.35)",
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "waveform": "waveform 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        waveform: {
          "0%, 100%": { transform: "scaleY(0.5)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
