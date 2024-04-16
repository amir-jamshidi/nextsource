import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '8px'
        }
      },
      fontFamily: {
        mo: ['var(--font-mo-medium)'],
        'morabba': 'morabba',
        'morabba-bold': 'morabba-bold',
        'morabba-light': 'morabba-light',
        'dana': 'dana',
        'dana-bold': 'dana-bold',
        'dana-light': 'dana-light'
      }
    },
  },
  plugins: [],
};
export default config;
