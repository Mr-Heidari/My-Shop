/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      Onyx: "#393D3F",
      Platinum: "#E6E6EA",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#D1345B",
      bermuda: "#78dcca",
      "gold-metalic": "#DEB841",
      dimGray: "#494850",
      red: "#dc2626",
      orange: "#ea580c",
      yello: "#ca8a04",
      green: "#16a34a",
      purple2: "#9333ea",
      amber: "#d97706",
      emrald: "#059669",
      teal: "#0d9488",
      cyan: "#0891b2",
      blue: "#2563eb",
      indigo: "#4f46e5",
      violet: "#7c3aed",
      fuchsia: "#c026d3",
      pink: "#ec4899",
      rose: "#e11d48",
      black: "#000000",
      Albaster: "#E2E8DD",
      Sage: "#CCC9A1",
      orange_web: "#FCA311",
    },
    extend: {
      backgroundImage: {
        homeIcone: "url('/src/assets/homeIcone.svg')",
        homeIconeOrange: "url('/src/assets/homeIconeorange.svg')",
        productIcone: "url('/src/assets/productIcone.svg')",
        productIconeorange: "url('/src/assets/productIconeorange.svg')",
        contactIcone: "url('/src/assets/contactIcone.svg')",
        contactIconeorange: "url('/src/assets/contactIconeorange.svg')",
        aboutIcone: "url('/src/assets/aboutIcone.svg')",
        aboutIconeorange: "url('/src/assets/aboutIconeorange.svg')",
        logo: "url('/src/assets/my-ShopLogo.svg')",
        onlineShop_bg: "url('/src/assets/home-onlineShop-bg.png')",
        digitalProductImage: "url('/src/assets/digitalItemsImage.jpg')",
        menItemsImage: "url('/src/assets/menItemsImage.jpg')",
        womenItemsImage: "url('/src/assets/womenItemsImage.jpg')",
        accessoryItemsImage: "url('/src/assets/accessoryItemsImage.jpg')",
        homebackground: "url('/src/assets/homebackground.jpg')",
        buyCart: "url('/src/assets/buyCart.png')",
        menuIcone: "url('/src/assets/menuIcone.svg')",
        backArrowIcone: "url('/src/assets/backArrowIcone.svg')",
        slider1: "url('/src/assets/slider/happy-young-woman.png')",
        slider2:
          "url('/src/assets/slider/influencer-with-headphones-using-phone-taking-selfie-recording-podcast-series-audience-air-online-production-internet-broadcast-show-host-streaming-live-content-digital-social-media.png')",
        slider3:
          "url('/src/assets/slider/man-making-music-bedroom-medium-shot.png')",
        slider4: "url('/src/assets/slider/model-career-kit-still-life.png')",
        slider5:
          "url('/src/assets/slider/young-handsome-man-choosing-shoes-shop.png')",
        leftArrow: "url('/src/assets/leftarrow.svg')",
        rightArrow: "url('/src/assets/rightarrow.svg')",
        cartIcone: "url('/src/assets/cartIcone.svg')",
        sortaz: "url('/src/assets/sort/sort-a-z.svg')",
        sortza: "url('/src/assets/sort/sort-z-a.svg')",
        sortdown: "url('/src/assets/sort/sortdown.svg')",
        sortup: "url('/src/assets/sort/sortup.svg')",
        downArrow: "url('/src/assets/sort/dropdownarrow.svg')",
        mensIcone: "url('/src/assets/filterMenu/men.png')",
        weomensIcone: "url('/src/assets/filterMenu/women.png')",
        jewerlyIcone: "url('/src/assets/filterMenu/jewerly.png')",
        digitalIcone: "url('/src/assets/filterMenu/electronics.png')",
        starIcone: "url('/src/assets/productContainer/starIcone.svg')",
      },
    },
  },
  plugins: [],
};
