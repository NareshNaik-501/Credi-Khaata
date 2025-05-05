module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        bounceSlow: "bounce 2s infinite",
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
