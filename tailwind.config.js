/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-navy": "hsl(234, 29%, 20%)",
        charcoal: "hsl(235, 18%, 26%)",
        greyish: "hsl(231, 7%, 60%)",
        tomato: "hsl(4, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
