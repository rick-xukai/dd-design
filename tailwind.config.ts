import type { Config } from 'tailwindcss';

import { Colors } from './src/theme/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        themePrimary: 'var(--theme-primary)',
        themeNavigationColor: 'var(--theme-navigation-color)',
        themeHomeLabelColor: 'var(--theme-home-label-color)',
        themeHomeFunctionColor: 'var(--theme-home-function-color)',
        themeContainerBg: 'var(--theme-container-bg)',
        themeContainerColor: 'var(--theme-container-color)',
        themeContainerColor2: 'var(--theme-container-color2)',
        ...Colors,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;
