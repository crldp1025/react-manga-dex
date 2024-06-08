/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"']
      },
      keyframes: {
        'switch-to-right': {
          '0%': { left: 0 },
          '100%': { left: '16px' }
        },
        'switch-to-left': {
          '0%': { left: '16px' },
          '100%': { left: 0 }
        },
        'toggle-search-open': {
          '0%': { width: 0, 'border-color': 'transparent' },
          '1%': { 'border-color': '#ffffff' },
          '100%': { width: '100%', 'border-color': '#ffffff' }
        },
        'toggle-search-close': {
          '0%': { width: '100%', 'border-color': '#ffffff' },
          '1%': { 'border-color': 'transparent' },
          '100%': { width: 0, 'border-color': 'transparent' }
        },
        'slideIn-to-right': {
          '0%': { left: '-100%', width: 0 },
          '1%': { width: '100%' },
          '100%': { left: 0, width: '100%' }
        },
        'slideOut-to-left': {
          '0%': { left: 0, width: '100%' },
          '99%': { width: '100%' },
          '100%': { left: '-100%', width: 0 }
        },
        'fade-in': {
          '0%': { opacity: 0},
          '100%': { opacity: 1 }
        },
        'fade-out': {
          '0%': { opacity: 1},
          '100%': { opacity: 0 }
        },
      },
      animation: {
        'switch-to-right': 'switch-to-right 0.1s linear',
        'switch-to-left': 'switch-to-left 0.1s linear',
        'toggle-search-open': 'toggle-search-open 0.2s ease-in-out',
        'toggle-search-close': 'toggle-search-close 0.2s ease-in-out',
        'slideIn-to-right': 'slideIn-to-right 0.3s ease-in-out',
        'slideOut-to-left': 'slideOut-to-left 0.3s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
      }
    },
  },
  plugins: []
}