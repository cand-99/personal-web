/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#0F0F0F',
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -30px) scale(1.1)",
          },
          "50%": {
            transform: "translate(0, 40px) scale(1)",
          },
          "75%": {
            transform: "translate(-30px, -25px) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [],
}
