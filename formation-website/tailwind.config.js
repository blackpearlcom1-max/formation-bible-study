/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "/sessions/amazing-fervent-clarke/mnt/Formation — Bible App & Website/Bible App & Website/formation-website/**/*.html"
  ],
  safelist: [
    "blur-[100px]", "blur-[120px]", "rounded-[2rem]", "rounded-[3rem]",
    "h-[500px]", "h-[580px]", "w-[280px]", "w-[500px]",
    "shadow-[0_20px_40px_-5px_rgba(61,21,64,0.5)]"
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#e9c349",
        "on-surface-variant": "#d2c2cc",
        "on-surface": "#f2e5f0",
        "surface-container-highest": "#7E3A6C",
        "secondary-container": "#af8d11",
        "on-secondary": "#3c2f00",
        "primary": "#ffb4a4",
        "primary-container": "#6e2414",
        "surface-variant": "#7E3A6C",
        "outline": "#c4a0c2",
        "surface-container-lowest": "#3D1540",
        "surface-container-high": "#703060",
        "surface-container": "#5C2A5A",
        "on-secondary-fixed": "#241a00",
        "inverse-primary": "#9a4431",
        "on-primary": "#5d1809",
        "surface-dim": "#4A1D4D",
        "outline-variant": "#7A5478",
        "surface-container-low": "#4A1D4D",
        "on-background": "#f2e5f0",
        "surface": "#5C2A5A",
        "background": "#5C2A5A",
        "on-primary-container": "#f58b73",
        "tertiary": "#ffb4a4",
        "tertiary-container": "#6e2414",
        "on-tertiary": "#5d1809",
        "on-tertiary-container": "#f48b73",
        "surface-bright": "#8A4478",
        "inverse-surface": "#eae0e7",
        "inverse-on-surface": "#342f34"
      },
      borderRadius: {
        DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem",
        "2xl": "1rem", "3xl": "1.5rem", full: "9999px"
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
}
