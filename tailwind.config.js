/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "744px",
      lg: "834px",
    },
    extend: {
      colors: {
        gray: {
          0: "#F7F7F7",
          1: "#EAEAEA",
          2: "#DADADA",
          3: "#B5B5B5",
          4: "#737373",
          9: "#1A1A1A",
        },
        primary: {
          0: "#F4F5FF",
          1: "#6B71FF",
        },
        red: {
          1: "#E61919",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
