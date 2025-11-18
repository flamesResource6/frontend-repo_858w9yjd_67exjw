/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: {
          900: '#040406',
          800: '#0A0A0F',
        },
        neon: {
          purple: '#7C3AED',
          aqua: '#00D1B2',
        }
      },
      fontFamily: {
        heading: ['Tajawal', 'Cairo', 'ui-sans-serif', 'system-ui'],
        body: ['IBM Plex Sans Arabic', 'Noto Kufi Arabic', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,58,237,0.35)',
        'glow-aqua': '0 0 40px rgba(0,209,178,0.35)',
        depth: '0 20px 60px rgba(0,0,0,0.5)'
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px'
      },
      animation: {
        'bg-pan': 'bgPan 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(.21,1,.21,1) both',
      },
      keyframes: {
        bgPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: .9, transform: 'scale(1.02)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
    },
  },
  plugins: [],
}
