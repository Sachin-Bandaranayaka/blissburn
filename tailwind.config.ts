import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8D0B41",
        secondary: "#FCC737",
        accent: "#FF6B6B",
        cream: "#FFF9E6",
        brown: {
          light: "#8B4513",
          dark: "#5C2C0C"
        }
      },
      fontFamily: {
        display: ['var(--font-pacifico)', 'cursive'],
        helvetica: ['Helvetica Condensed', 'Helvetica Neue Condensed Bold', 'HelveticaNeue-CondensedBold', 'Arial-BoldMT', 'Arial', 'sans-serif'],
      },
      dropShadow: {
        'custom': '2px 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-lg': '4px 8px 12px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'dots-pattern': 'radial-gradient(circle, #FCC737 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
