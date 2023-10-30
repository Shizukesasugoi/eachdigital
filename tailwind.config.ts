import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom font family
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // Custom font size
      fontSize: {
        '2xs': '0.625rem',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        //background
        background: "#0d1117", 
        // Primary color
        primary: {
          100: '#E6F7FF',
          200: '#BAE3FF',
          300: '#7CC4FA',
          400: '#47A3F3',
          500: '#2186EB', 
          600: '#0967D2',
          700: '#0552B5',
          800: '#03449E',
          900: '#01337D',
        },
        // Secondary color
        secondary: {
          100: '#F1E2F3',
          200: '#D9B8E8',
          300: '#BB77D1',
          400: '#9F3A8E',
          500: '#85217A',
          600: '#6A186E',
          700: '#58145E',
          800: '#48114A',
          900: '#390E3C',
        },
        // Accent colors
        yellow: '#FFD700',
        green: '#00FF00',
        red: '#FF0000',
        blue: '#0000FF',
        purple: '#800080',
        pink: '#FF1493',
        orange: '#FFA500',
      },
    },
  },
  plugins: [],
}
export default config
