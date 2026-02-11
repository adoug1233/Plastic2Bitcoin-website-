import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bse: {
          dark: '#0a0e1a',
          navy: '#0f172a',
          blue: '#0ea5e9',
          cyan: '#06b6d4',
          glow: '#38bdf8',
          muted: '#64748b',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        sans: ['Exo 2', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(14, 165, 233, 0.4)',
        'glow-sm': '0 0 20px -5px rgba(14, 165, 233, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
