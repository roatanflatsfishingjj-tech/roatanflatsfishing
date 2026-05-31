module.exports = {
  content: [
    "./*.html",
    "./About/**/*.html",
    "./Contact/**/*.html",
    "./Cruise/**/*.html",
    "./Moments/**/*.html",
    "./Rates/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#005461",
        teal: "#018790",
        aqua: "#00B7B5",
        mist: "#F4F4F4",
        sand: "#E8F3F2"
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      }
    }
  }
};
