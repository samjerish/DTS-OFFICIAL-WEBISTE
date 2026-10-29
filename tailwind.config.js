/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dts: {
          navy: '#101D2D',
          charcoal: '#202833',
          steel: '#697586',
          'steel-light': '#9AA4B2',
          light: '#F3F5F7',
          surface: '#F8FAFC',
          white: '#FFFFFF',
          accent: '#2563EB',
          'accent-hover': '#1D4ED8',
          'accent-light': '#DBEAFE',
          border: '#E2E8F0',
          'border-dark': '#2A3644'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace']
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}

