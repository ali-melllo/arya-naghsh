import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1180px" } },
    extend: {
      colors: {
        paper: "hsl(var(--paper))",
        surface: "hsl(var(--surface))",
        ink: "hsl(var(--ink))",
        "ink-soft": "hsl(var(--ink-soft))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: { sans: ["var(--font-vazirmatn)", "sans-serif"] },
      borderRadius: { DEFAULT: "2px", lg: "4px" },
      keyframes: {
        marquee: { from :{ transform: "translateX(0)" } , to: { transform: "translateX(-50%)" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        "fade-up": "fade-up .6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
