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
        black: '#0B0B0B',
        white: '#F6F6F6',
        'text-primary': '#F6F6F6',
        'grey-light': '#1E1E1E',
        'grey-secondary': '#888888',
        'grey-muted': '#555555',
        border: '#1E1E1E',
        'bg-card': '#111111',
        'bg-elevated': '#161616',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
