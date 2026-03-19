/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cal Sans"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Cal Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        void: '#0A1628',
        'deep-navy': '#0F172A',
        ghost: '#F8FAFC',
        plasma: '#2563EB',
        'bio-green': '#10B981',
        graphite: '#1E293B',
        onyx: '#0D0D12',
      },
    },
  },
  plugins: [],
}
