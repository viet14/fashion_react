
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'bgTitle': "url('/public/titlebg.png')",
        'bgFooter': "url('/public/icon_footer.png')"
      },
      backgroundPosition: {
        'title': '0 75%',
        'car': '0 -94px',
        'money':'0 -196px',
        'connect': '0 -300px'

      },
      colors:{
        'black': "#000000",
        'bg-opacity': "rgba(51 , 51, 51, 1)",
        'stone': '#e3e3e3',
        'white': "#ffffff",
        'gray': "#495057",
        'red': "#ff0000",
        'text': "#2e2e2e", 
        'footer': "#141414", 
        'button': "#222"
      },
      boxShadow:{
        'header': '0 6px 12px 0 rgb(0 0 0 / 7% )',
        'size': '0 0 0 2px rgb(0 0 0 / 90%)'
      }
    },
  },
  plugins: [],
}