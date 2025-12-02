/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE7D63',
        background: '#0F0F0F',
        surface: '#1A1A1A',
        'ui-surface': '#0F0F0F',
        'text-main': '#F9EFEC',
        'text-muted': '#676665',
        'active-orange': '#E7BEB1', // Active page color
        'light-orange': '#F4D4C7'
      },
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',    // paragraphs
        medium: '500',    // medium titles
        semibold: '600',  // titles
      },
    },
  },
  plugins: [],
}
