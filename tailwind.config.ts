import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vercel-style grayscale system
        gray: {
          50:  "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        black: "#000000",
        white: "#ffffff",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // same as Vercel
      },

      backgroundImage: {
        // Vercel hero gradient glow
        "vercel-glow":
          "radial-gradient(ellipse at bottom, rgba(15,15,15,0) 0%, rgba(30,30,30,0.6) 30%, rgba(0,0,0,1) 70%)",
      },

      boxShadow: {
        // Subtle soft UI shadows
        soft: "0 0 20px rgba(255,255,255,0.08)",
      },

      borderRadius: {
        lg: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
