import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1e6f78",
        accent: "#f1b139",
        ink: "#0e1111",
        sand: "#f7faf9",
      },
      borderRadius: { "2xl": "1.25rem" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
