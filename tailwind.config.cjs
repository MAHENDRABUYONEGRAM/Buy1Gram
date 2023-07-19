/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{astro,js,jsx,md,mdx,ts,tsx}",
    "./src/components/**/*.{astro,js,jsx,md,mdx,ts,tsx}",
    "./src/layouts/**/*.{astro,js,jsx,md,mdx,ts,tsx}",
    "./src/content/**/*.{astro,js,jsx,md,mdx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      display: ["Work Sans Variable", "sans-serif"],
      body: ["Merriweather Sans Variable", "sans-serif"],
    },
    extend: {
      screens: {
        md: "868px",
      },
      textColor: {
        accent: "#039145",
      },
      backgroundColor: {
        "light-black": "#17181F",
        "xl-black": "#2b2d3b",
      },
      backgroundImage: {
        "gradient-yellow-green":
          "linear-gradient(90deg, rgba(241,255,0,1) 0%, rgba(65,255,0,1) 100%)",
        "gradient-black-green":
          "linear-gradient(90deg, #2b2d3b 0%, #74EB86 100%)",
      },
      boxShadow: {
        blogPost: "0 20px 30px -10px #26394d",
        teamMember: "3px 3px 3px 3px",
      },
      animation: {
        prixClipFix: "prixClipFix 2s linear infinite",
      },
      keyframes: {
        prixClipFix: {
          "0%": { clipPath: "polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)" },
          "25%": {
            clipPath: "polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)",
          },
          "50%": {
            clipPath:
              "polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)",
          },
          "75%": {
            clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)",
          },
          "100%": {
            clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
  corePlugins: {
    preflight: false,
  },
}
