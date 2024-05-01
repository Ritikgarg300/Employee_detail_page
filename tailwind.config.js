/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'red':{
          '50': '#FFEBEE',
          '100': '#FFCDD2',
          '200': '#EF9A9A',
          '300': '#E57373',
          '400': '#EF5350',
          '500': '#F44336',
        },
        'blue': {
          DEFAULT: '#0000FF',
          '50': '#E3F2FD',
          '100': '#BBDEFB',
          '200': '#90CAF9',
          '300': '#64B5F6',
          '400': '#42A5F5',
          '500': '#2196F3',
          '600': '#1E88E5',
          '700': '#1976D2',
          '800': '#1565C0',
          '900': '#0D47A1',
        },
        'indigo':{
         '600':'#090979'
        },
        'cyan':{
          '400':'#00d4ff'
        },
        'orange':{
          '400':'#cd833b',
          '500':'#ca933f'
        },
        'yellow':{
          '500':'#c9993f'
        }
      }
    },
  },
  plugins: [],
};
