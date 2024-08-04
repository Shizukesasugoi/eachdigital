import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
};
 
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-inter)`]
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
        background: "#F1EDF2", 
        dark:'#0d1117',
        // Primary color
        primary: {
          100: '#F1EDF2',
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
  darkMode: "class",
  plugins: [nextui()],
}
export default config
