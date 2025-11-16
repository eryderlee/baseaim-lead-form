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
        // Baseaim Brand Colors - Blues
        'sky-blue': '#87CEEB',
        'deep-blue': '#0A2E6E',
        'medium-blue': '#0052CC',
        'bright-blue': '#0066FF',
        'azure-blue': '#4FC3F7',
        'light-blue': '#6BB6FF',
        'powder-blue': '#B0E0E6',

        // Baseaim Brand Colors - Accents
        'brand-red': '#E11D48',
        'brand-orange': '#F97316',
        'brand-yellow': '#EAB308',

        // Background Colors
        'ice-blue': '#F8FCFF',
        'sky-tint': '#E1F5FE',
        'cloud-white': '#E3F2FD',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'dm-serif': ['var(--font-dm-serif)', 'serif'],
        'work-sans': ['var(--font-work-sans)', 'sans-serif'],
        'jetbrains': ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #E11D48 0%, #F97316 50%, #EAB308 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
