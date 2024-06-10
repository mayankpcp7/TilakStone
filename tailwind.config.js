module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkYellow: "#E0A922",
        gold: "#EDC743",
        darkGold: "#D6AA14",
        lightBrown: "#FCF7E9",
        offBlack: "#0C0C0C",
        offGrey: "#666666",
        grey: "#525252",
        lightBlack: "#1A1A1A",
        lightGrey: "#DADADA",
        thinGrey: "#4D524D",
        faqPeraBlack: "#3E3E3E",
        red: "#ff0000",
        blogPera: "#000700",
        blogBorder: "#D4D4D4",
        navBlack: "#333333",
        skyBlue: "#4286F4",
      },
      backgroundImage: {
        latestblogsgradient: [
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 49.55%, rgba(255, 255, 255, 0.1) 100%)",
        ],
      },
      fontFamily: {
        plusJkarta: "Plus Jakarta Sans",
        graphik: "Graphik",
      },
      fontSize: {
        "6xl": "64px",
        "3xl": "28px",
        "3xxl": "32px",
        "4xl": "42px",
        "4xxl": "52px",
      },
      lineHeight: {
        full: "100%",
        sm: "120%",
        md: "125%",
        xmd: "138%",
        lg: "150%",
        xl: "166%",
      },
    },
  },
  plugins: [],
};
