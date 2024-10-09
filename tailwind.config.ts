
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      "2xs": "200px",
      xs: "350px",
      s: "500px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lmd: "880px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      "2lg": "1100px",
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'redorange': "#EE2622",
        'orange': "#F15B18",
      },
      backgroundColor: {
        'crimson' : "bg-gradient-to-r from-colors.redorange from-30% to-colors.orange",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"]
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
        blob: "blob 7s infinite",
    },
    },
  },
  plugins: [],
};