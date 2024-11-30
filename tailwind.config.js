/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "serif"],
        exo: ["Exo", "sans-serif"],
      },
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      }, keyframes: {
        boo: {
          '0%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            opacity: '0.3',
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
      },
      animation: {
        boo: '0.9s boo infinite alternate',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
