import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gpt-gray': '#3e4247',
        'gpt-lightgray': '#4c4f54'
      },
      keyframes: {
        blink: {
          '30%': { opacity: '0.3' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        blink: 'blink 1s infinite'
      }
    },
  },
  plugins: [],
};
export default config;
