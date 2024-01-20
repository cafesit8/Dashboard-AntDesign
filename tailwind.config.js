/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        seagull: {
          50: '#edf9fa',
          100: '#d2f2f5',
          200: '#a5e2ea',
          300: '#70c9d8',
          400: '#43a7be',
          500: '#298ba3',
          600: '#1f6c82',
          700: '#1c5769',
          800: '#1b4654',
          900: '#1b3c46',
          950: '#0a1f29'
        }
      }
    }
  },
  plugins: []
}
