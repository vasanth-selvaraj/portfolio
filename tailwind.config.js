/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      "main-color": "#1A1A1A",
      "accent-color": "#665DF5",
      "text-color": "#E5E7EB",
      "gradient-start":"#665DF5",
      "gradient-min":"#6A82FB",
      "gradient-end":"#5D26C1",
      line: "#575757",
    },
  },
  plugins: [],
};
