/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5052b5',
        'custom-black': '#2b3137', 
        'custom-blurple': '#606699', 
        'custom-background': 'rgb(18,31,53)',
        'custom-about': '#C0D0DD',
        'custom-purple': '#312450',
        'light-purple': '#5e4f83',
        'graySlate': '#b1b0b5', 
        'home-purple': '#a68ff2',
        'custom-aqua': '#67dbd0',
        'custom-pink': '#b74e91',
        'custom-green': '#3cd871',  
        'custom-contact': '#493382',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, rgba(94,79,131,1) 0%, rgba(141,113,233,1) 33%, rgba(200,109,214,1) 51%, rgba(235,119,229,1) 74%, rgba(217,148,230,1) 100%)',
      },
      boxShadow: {
        'custom': '0 0 20px 5px rgba(150, 150, 150, 0.2)',
        'outline': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
    },
  },
  plugins: [],
}

