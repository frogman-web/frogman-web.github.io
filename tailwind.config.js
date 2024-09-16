/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-oswald)",
      secondary: "var(--font-open_sans)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#100e0e",
        },
        secondary: {
          DEFAULT: "#787f8a",
        },
        accent: {
          DEFAULT: "#c7a17a",
          hover: "#a08161",
        },
      },
      backgroundImage: {
        companies:"url('/assets/companies/background.jpg')",
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/footer/bg.jpg')",
      },
    },
  },
  plugins: [],
};
