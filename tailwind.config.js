/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      primary: {
        default: '#CB0C9F',
        gradient: {
          start: '#CB0C9F',
          end: '#7928CA',
        },
        light: '#F883DD',
      },
      secondary: {
        default: '#8392AB',
        gradient: {
          start: "#A8B8D8",
          end: '#627594',
        },
        light: '#E4E8ED',
      },
      info: {
        default: '#17C1E8',
        gradient: {
          start: '#21D4FD',
          end: '#2152FF',
        },
        light: '#ABE9F7'
      },
      success: {
        default: '#82D616',
        gradient: {
          start: '#98EC2D',
          end: '#17AD37',
        },
        light: '#CDF59B',
      },
      danger: {
        default: '#EA0606',
        gradient: {
          start: '#FF667C',
          end: '#EA0606',
        },
        light: '#FC9797',
      },
      warning: {
        default: '#FBCF33',
        gradient: {
          start: '#FBCF33',
          end: '#F53939',
        },
        light: '#FEF5D3',
      },
      dark: {
        default: '#252F40',
        gradient: {
          start: '#3A416F',
          end: '#141727',
        },
        light: '#8097BF',
      },
      light: {
        default: '#E9ECEF',
        '100': '#F8F9FA',
        '200': '#E9ECEF',
        '300': '#DEE2E6',
        '400': '#CED4DA',
        '500': '#E4E8ED',
        '600': '#6C757D',
        '700': '#495057',
        '800': '#343A40',
        '900': '#212529',
        gradient: {
          start: '#EBEFF4',
          end: '#CED4DA',
        }
      }
    },
    extend: {},
  },
  plugins: [],
}
