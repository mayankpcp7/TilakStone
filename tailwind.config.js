module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundSize: {
        full: "100% 100%",
      },
      colors: {
        darkYellow: "#E0A922",
        darkYellowPrimary: "#ECC744",
        darkYellowSecondary: "#BF9602",
        whitePrimary: "#F3F3F3",
        gold: "#EDC743",
        darkGold: "#D6AA14",
        lightBrown: "#FCF7E9",
        lightBrownSecondary: "#FCFCFC",
        offBlack: "#0C0C0C",
        offGrey: "#666666",
        grey: "#525252",
        albumColor: "#F3F3F3",
        lightBlack: "#1A1A1A",
        lightGrey: "#DADADA",
        lightGreyPrimary: "#DEDEDE",
        thinGrey: "#4D524D",
        germanGrey: "#DEDEDE",
        faqHeadBlack: "#0E0E0E",
        faqPeraBlack: "#3E3E3E",
        red: "#ff0000",
        blogPera: "#000700",
        blogBorder: "#D4D4D4",
        navBorder: "#D4D4D4",
        navBlack: "#333333",
        skyBlue: "#4286F4",
        lightBlack: "#43181829",
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
        "2md":"140%",
      },
      boxShadow: {
        "inspire-img-shadow": "0px 4px 16px 0px #0000000F",
      },
      screen: {
        xs: "425px",
      },
      backgroundImage: {
        videoBackground:
          "url('/src/assets/images/webp/header/video-background.webp')",
        commuinityCard: "0px 4px 16px 0px #0000000F",
        commuinityin: "0px 2px 17.2px 0px #0000000A",
      },
    },
  },
  plugins: [],
};

