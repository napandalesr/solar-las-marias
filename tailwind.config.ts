import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1534px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#19255B",
        secundary: "#004F9F",
        tertiary: "#8BC04B",
        green: "#00A755",
        yelow: "#E9C43B",
        orange: "#DD7A36"
      },
      keyframes: {
        'float-up-sm': {
          '0%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-8px)'},
          '100%': {transform: 'translateY(0px)'},
        },
      },
      animation: {
        'float-up-sm': 'float-up-sm 5s ease-in-out infinite both',
      },
    },
  },
  plugins: [],
};
export default config;
