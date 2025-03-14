import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../apps/**/src/**/*.{js,ts,jsx,tsx}',
    // '../../node_modules/@repo/ui/dist/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
