/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#b68bdcb1",
        secondary: "#2E4CFF",
        // tertiary: "#322153",
        // quaternary: "#211235",
        // quinary: "#140825",
      },
    },
  },
  plugins: [],
}

