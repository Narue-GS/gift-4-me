/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "white",
        foreground: "white",
        "main": "rgb(56,56,255)",
        "detail": "rgb(255,187,0)",
        primary: {
          DEFAULT: "var(--main)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
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
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'waving-hand': 'wave 0.7s linear forwards',
        'create-task': 'grow 0.5s linear forwards',
        'open-modal': 'open 0.1s linear forwards'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}