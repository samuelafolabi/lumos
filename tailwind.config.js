/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#36104C",
          2: "#00C6F4",
        },
        secondary: {
          1: "#FDC506",
          2: "#882EFF",
          3: "#FF04C8",
        },
        positive: "#9FFE00",
        pending: "#CCABE1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Brinnan: ["Brinnan", "sans-serif"],
        // adelia: ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [],
};
