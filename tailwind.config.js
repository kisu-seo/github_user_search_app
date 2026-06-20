/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          900: '#141D2F',
          800: '#1E2A47',
          700: '#2B3442',
          500: '#4B6A9B',
          300: '#697C9A',
          200: '#90A4D4',
          100: '#F6F8FF',
          0: '#FFFFFF',
        },
        brandBlue: {
          300: '#60ABFF',
          500: '#0079FF',
        },
        brandRed: {
          500: '#F74646',
        }
      },
      borderRadius: {
        'radius-0': '0px',
        'radius-4': '4px',
        'radius-6': '6px',
        'radius-8': '8px',
        'radius-10': '10px',
        'radius-12': '12px',
        'radius-16': '16px',
        'radius-20': '20px',
        'radius-24': '24px',
        'radius-full': '999px',
      },
      spacing: {
        'spacing-0': '0px',
        'spacing-025': '2px',
        'spacing-050': '4px',
        'spacing-075': '6px',
        'spacing-100': '8px',
        'spacing-125': '10px',
        'spacing-150': '12px',
        'spacing-200': '16px',
        'spacing-250': '20px',
        'spacing-300': '24px',
        'spacing-400': '32px',
        'spacing-500': '40px',
        'spacing-600': '48px',
        'spacing-800': '64px',
        'spacing-1000': '80px',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
