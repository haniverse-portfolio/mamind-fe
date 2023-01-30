/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
        textSlow: "textSlow 8s ease infinite",
        fadeUp: "fadeUp 1s ease",
        fadeLessUp: "fadeLessUp 1s ease",
        fadeIn: "fadeIn 1s ease",
        fadeOut: "fadeOut 1s ease",
        drop: "drop 2s ease-in forwards",
        customSpin: "customSpin 1s linear infinite",
        dropCustomSpin:
          "drop 2s ease in forwards customSpin 1s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },

          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeLessUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },

          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },

          "100%": {
            opacity: "0",
          },
        },

        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        textSlow: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        drop: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(2600px)" },
        },
        customSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
