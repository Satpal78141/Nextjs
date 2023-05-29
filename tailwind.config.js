
const defaultTheme= require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors:{
      ...defaultTheme.colors,
      primary:'#3B81F6',
      backcolor:'#F3F2ED',
      red:"red",
      dark_grey:"#000000d1",
      white:'#ffffff',
      black:"black",
      grey:"4a5568",
      text: {
        DEFAULT:'#1F2937',
        light:"#6C7281",
        grey:"4a5568"
      }
    },
    extend: {},
  },
  plugins: [],
}


