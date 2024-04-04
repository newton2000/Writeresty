/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontSize: {
      "h1": '2em', //2em is 32px
      "h2": '1.5em', //1.5em is 24px
      "h3": '1.17em', //1.17em is 18.72px
      "h4": '1em', //1em is 16px
      "h5": '.83em', //.83em is 13.28px
      "h6": '.67em', //.67em is 10.72px
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        "primary": "#000000",
        "secondary": "#FFFFFF",
        "accent": "#007F73",
        "neutral": "#31363F",
        "base-100": "#FFFFFF",
        "info": "#187498",
        "success": "#36AE7C",
        "warning": "#F9D923",
        "error": "#EB5353",
      },
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        "primary": "#FFFFFF",
        "secondary": "#000000",
        "accent": "#76ABAE",
        "neutral": "#31363F",
        "base-100": "#1A1A1A",
        "info": "#70A1D7",
        "success": "#A1DE93",
        "warning": "#F7F48B",
        "error": "#F47C7C",
      },
    }], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};