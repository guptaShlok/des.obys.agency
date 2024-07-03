import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: {
          light: "#F2F2F2", // Example light purple
          DEFAULT: "#F2F2F2", // Example default purple
        },
        primaryBlack: {
          light: "#17191A", // Example light green
          DEFAULT: "#17191A", // Example default green
        },
        primaryGrey: {
          light: "#858686", // Example light green
          DEFAULT: "#858686", // Example default green
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
export default config;
