/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2dd4bf",
        secondary: "#64748b",
        dark: "#0f172a",
        blue: "#1d4ed8",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
