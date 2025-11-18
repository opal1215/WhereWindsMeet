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
        // Background Colors
        'bg-primary': '#0A1628',
        'bg-secondary': '#132B47',
        'bg-card': '#1A3A5C',

        // Gold Colors (WWM DNA)
        'gold-primary': '#D4AF37',
        'gold-bright': '#F0D87C',
        'gold-dark': '#B8952E',

        // Blue Accents
        'blue-accent': '#4A90E2',
        'blue-muted': '#2C5282',

        // Text Colors
        'text-primary': '#F5F1E8',
        'text-secondary': '#B8C5D6',
        'text-muted': '#7A8BA3',
        'text-gold': '#D4AF37',
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
        'gradient-gold': 'linear-gradient(135deg, #F0D87C 0%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(10, 22, 40, 0.6) 0%, rgba(10, 22, 40, 0.85) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
