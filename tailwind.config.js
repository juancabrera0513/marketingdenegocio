/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'strong-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.9' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'rotate-scale': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(10deg) scale(1.1)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'strong-pulse': 'strong-pulse 2s infinite',
        'bounce-slow': 'bounce-slow 2s infinite',
        'rotate-scale': 'rotate-scale 0.6s ease-in-out',
        'fade-slide': 'fade-slide 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
