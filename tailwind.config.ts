import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      'trabuddy-alternative': '#00C696',
      'nephritis/05': '#E9F7EF',
      'light-sky-blue': '#8BC4FF',
      'dark-sky-blue': '#82BFD4',
      'yellow-sun': '#FBFF23',
      'blue-gray/90': '#24252F',
      'blue-gray/80': '#343741',
      'blue-gray/60': '#5E626F',
      'blue-gray/40': '#C1C5CF',
      'anti-flash-white': '#EFF1F6',
      'shadow-blue': '#7A8FAD',
      blueberry: '#4A77FF',
      turquoise: '#40E2E8',
      azure: '#EDFCFF',
      lotion: '#FBFBFB',
      'gray/100': '#F2F4F7',
      'gray/700': '#344054',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        notoKR: ['var(--font-noto-sans-kr)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
