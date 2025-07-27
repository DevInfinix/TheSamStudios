/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        magenta: {
          400: '#ff00ff',
          500: '#e600e6',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
  safelist: [
    'text-cyan-400',
    'text-blue-400', 
    'text-magenta-400',
    'text-purple-400',
    'text-green-400',
    'text-orange-400',
    'bg-cyan-500/20',
    'bg-blue-500/20',
    'bg-magenta-500/20',
    'bg-purple-500/20',
    'bg-green-500/20',
    'bg-orange-500/20',
  ]
};