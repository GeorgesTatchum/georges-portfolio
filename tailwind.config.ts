import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {

    screens: {
      'xs': { 'max': '640px' },
      'smin': { 'min': '641px' },
      'sm': { 'min': '641px', 'max': '767px' },
      'smd': { 'max': '767px' },
      'smdmin': { 'min': '768px' },

      'md': { 'min': '768px', 'max': '1023px' },
      'mdd': { 'max': '1023px' },
      'mddmin': { 'min': '1024px' },

      'lg': { 'min': '1024px', 'max': '1279px' },
      'lgd': { 'max': '1279px' },

      'xl': { 'min': '1280px', 'max': '1535px' },

      '2xl': { 'min': '1536px' },
    },

    extend: {
      display: ["group-hover"],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'darkest': "rgb(16, 20, 29)",
        "dark-purple": "rgb(3, 1, 16)",
        "code-bg": "rgb(10, 26, 34)",
        'primary': 'rgb(134, 23, 255)',
        "light-purple": "rgb(180, 111, 253)",
        'secondary': 'rgb(69, 255, 205)',
        "blood-red": 'rgb(255, 0, 0)',
        "gray": 'rgb(16, 20, 29)',
        "green": 'rgb(69, 255, 205)'
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}
export default config
