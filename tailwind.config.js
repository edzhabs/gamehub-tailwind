/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "dark-mode": "#121212",
      },
      width: {
        image: "24%",
      },
    },
  },
  plugins: [],
};
