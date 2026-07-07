/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '21px'],
      base: ['16px', '26px'],
      lg: ['18px', '28px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '34px'],
      '3xl': ['30px', '38px'],
      '4xl': ['38px', '44px'],
      '5xl': ['52px', '56px'],
      '6xl': ['68px', '68px'],
      '7xl': ['84px', '84px'],
      '8xl': ['104px', '100px'],
    },
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        paper: '#ece7da',
        ink: '#17160f',
        slate: {
          DEFAULT: '#6f6b5f',
          bright: '#8b8677',
        },
        pine: {
          DEFAULT: '#2b5a4a',
          bright: '#6cc39a',
        },
        copper: {
          DEFAULT: '#c15f36',
          bright: '#e0824c',
        },
        line: '#d6d4cd',
        'ink-900': '#0c0d0a',
        'ink-950': '#08090a',
        'line-dark': '#2b2b27',
        panel: '#faf8f2',
        'panel-dark': '#14140f',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
