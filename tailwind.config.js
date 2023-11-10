/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textWrap: {
        balance: "balance",
      },
    },
  },
  plugins: [],
};
