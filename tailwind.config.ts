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
          950: '#020212',
          900: '#040415',
          800: '#070730',
          700: '#0d0d4a',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          neon: '#00e5ff',
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
        'gradient-brand': 'linear-gradient(135deg, #040415 0%, #0d0d4a 50%, #1a0030 100%)',
        'gradient-cyan-purple': 'linear-gradient(135deg, #00e5ff 0%, #a855f7 100%)',
        'gradient-purple-magenta': 'linear-gradient(135deg, #6b21a8 0%, #e879f9 100%)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.6)' },
        },
      },
    },
  },
  safelist: [
    'text-cyan-neon',
    'text-purple-neon',
    'text-magenta-neon',
    'bg-cyan-neon',
    'bg-purple-neon',
    'bg-magenta-neon',
    'border-cyan-neon',
    'border-purple-neon',
    'border-magenta-neon',
  ],
  plugins: [],
}
export default config
