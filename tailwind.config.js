/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto Mono",
      },
      gridTemplateColumns: {
        "auto-grid": "repeat(auto-fit, minmax(min(10rem, 100%), 1fr))",
      },
      colors: {
        primary: "#15151F",
        header: "#111827",
      },
    },
  },
  plugins: [],
};
