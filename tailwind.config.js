module.exports = {
  theme: {
    extend: {
      keyframes: {
        bgmove: {
          "0%": { transform: "scale(1) translateX(0px)" },
          "50%": { transform: "scale(1.05) translateX(-40px)" },
          "100%": { transform: "scale(1) translateX(0px)" }
        }
      }
    }
  }
}
