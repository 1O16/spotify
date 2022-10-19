/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "spotify-gray": "#121212",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
