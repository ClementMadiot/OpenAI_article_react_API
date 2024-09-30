/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        none: 'none',
        'hero-pattern': "url(/src/assets/grid.svg)",
        'gradient': "radial-gradient(_at_27%_37%,hsla(215,98%,61%,1)_0px,transparent_0%_),radial-gradient(at_97%_21%,hsla(125,98%,72%,1)_0px,transparent_50%),radial-gradient(at_52%_99%,hsla(354,98%,61%,1)_0px,transparent_50%),radial-gradient(at_10%_29%,hsla(256,96%,67%,1)_0px,transparent_50%),radial-gradient(at_97%_96%,hsla(38,60%,74%,1)_0px,transparent_50%),radial-gradient(at_33%_50%,hsla(222,67%,73%,1)_0px,transparent_50%),radial-gradient(at_79%_53%,hsla(343,68%,79%,1)_0px,transparent_50%)"
      },
      backgroundColor: {
        'heroBefore': 'var(--radicalGradient-main)'
      }
    },
  },
  plugins: [],
}

