import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
      colorChange: {
        '0%, 100%': { color: '#9CBBD5' }, // Color inicial y final
        '50%': { color: '#FF6347' }, // Color intermedio
      },
    },
    animation: {
      'color-change': 'colorChange 2s ease-in-out infinite', // Duración y repetición de la animación
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
