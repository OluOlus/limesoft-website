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
        navy: {
          950: '#07111e',
          900: '#091528',
          800: '#0d1f3c',
          700: '#122848',
        },
        'cyan-neon': '#018ad8',
        cyan: {
          400: '#38bdf8',
          500: '#018ad8',
          neon: '#018ad8',
        },
        purple: {
          neon: '#a855f7',
          deep: '#6b21a8',
        },
        magenta: {
          neon: '#e879f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #018ad8 0%, #38bdf8 60%, #232a85 100%)',
        'gradient-teal': 'linear-gradient(135deg, #018ad8 0%, #38bdf8 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(1,138,216,0.3)' },
          '50%':       { boxShadow: '0 0 40px rgba(1,138,216,0.6)' },
        },
      },
    },
  },
  safelist: [
    'text-cyan-neon',
    'bg-cyan-neon',
    'border-cyan-neon',
  ],
  plugins: [],
}
export default config
