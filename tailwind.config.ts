import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "main": "rgb(56,56,255)",
        "detail": "rgb(255,187,0)"
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '20%': { transform: 'rotate(-15.0deg)' },
          '40%': { transform: 'rotate(15.0deg)' },
          '60%': { transform: 'rotate(-15.0deg)' },
          '80%': { transform: 'rotate(15.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        grow: {
          '0%' : { height: '0%', overflow: 'hidden' },
          '100%' : { height: '100%', overflow: 'hidden'},
        },
        open: {
          '0%' : { width: '0%', overflow: 'hidden' },
          '100%' : { width: '25%', overflow: 'hidden'},
        }
      },
      animation: {
        'waving-hand': 'wave 0.7s linear forwards',
        'create-task': 'grow 0.5s linear forwards',
        'open-modal': 'open 0.1s linear forwards'
      },
    },
  },
  plugins: [],
};
export default config;
