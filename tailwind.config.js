/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textWrap: {
        balance: "balance",
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-out",
        fadeZoomIn: "zoomIn 0.6s ease-out",
        border: "border 1s ease-in-out infinite",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        border: {
          "0%": {
            width: "0%",
            height: "0%",
          },
          "50%": {
            width: "100%",
            height: "0%",
          },
          "100%": {
            width: "100%",
            height: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
