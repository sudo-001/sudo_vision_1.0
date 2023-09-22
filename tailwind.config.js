/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: "1140px",
      conainerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px grba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#cc66f6",
        textDark: "#8992b0",
        hoverColor: "rgba(100,255,218,0.1)",
        dashboardColor: "#",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar'),
  ],
}
