const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.html"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.5rem",
              lineHeight: 1,
              fontWeight: 800,
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
