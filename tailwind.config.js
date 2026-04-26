/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#090b11',
        surface: '#101420',
        card: '#151a2a',
        accent: '#44f0ff',
        accentSoft: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 40px rgba(68, 240, 255, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

