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
        // Background Colors - Earthy/Parchment Theme (Softened)
        'bg-primary': '#EAE0C8', // Softer, slightly darker parchment
        'bg-secondary': '#DFD5BD', // Darker/Deeper parchment for contrast
        'bg-card': '#F2E9D8', // Warm paper, not stark white
        'bg-overlay': 'rgba(42, 33, 24, 0.85)', // Dark Brown Overlay

        // Gold Colors (Antique/Worn)
        'gold-primary': '#C6A664', // Antique Gold
        'gold-bright': '#E5C17C', // Bright Gold Highlight
        'gold-dark': '#8C7335', // Dark Bronze/Gold

        // Accents
        'accent-red': '#8B2E2E', // Seal Red / Cinnabar
        'accent-indigo': '#2C4E66', // Faded Indigo / Ink Blue
        'accent-green': '#4A5D4F', // Bamboo Green

        // Text Colors - Ink Theme (High Contrast)
        'text-primary': '#1A140E', // Almost black ink
        'text-secondary': '#4A3B2A', // Dark brown ink
        'text-muted': '#6B5D4D', // Medium brown
        'text-gold': '#9C7C3A', // Darker Bronze/Gold for text readability
        'text-on-dark': '#F5F1E8', // Light text for dark backgrounds (Hero)
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Crimson Text', 'Georgia', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '9xl': '120px',
        '5xl': '48px',
      },
      spacing: {
        'section-y': '120px',
        'section-y-mobile': '80px',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #E5C17C 0%, #C6A664 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(10, 22, 40, 0) 0%, #F2E8D5 100%)', // Fade to parchment
        'paper-texture': "url('/images/paper-texture.png')", // Placeholder for texture if added later
      },
      boxShadow: {
        'ink': '0 4px 20px -2px rgba(42, 33, 24, 0.1)',
        'card': '0 2px 10px rgba(42, 33, 24, 0.05)',
      }
    },
  },
  plugins: [],
};

export default config;
