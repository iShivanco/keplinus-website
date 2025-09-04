/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",       // scan all pages
    "./src/components/**/*.{js,ts,jsx,tsx}",  // scan all components
  ],
  darkMode: "class", // enable dark mode via 'class'
  theme: {
    extend: {
      colors: {
        primary: "#099db6",         // Keplinus primary brand color
        "primary-dark": "#067a8d",  // darker variant for hover/background
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
