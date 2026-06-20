/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e17",
        panel: "#111726",
        panel2: "#161d2f",
        line: "#243049",
        accent: "#5b8cff",
        accent2: "#2dd4bf",
        muted: "#8b97b0",
        text: "#e6ebf5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { content: "1080px" },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { fadeUp: "fadeUp 0.6s ease both" },
    },
  },
  plugins: [],
};
