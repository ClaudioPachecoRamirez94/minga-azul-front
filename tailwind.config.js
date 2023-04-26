/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    purge: [
    './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        screens:{
          'xsm': {'min': '320px', 'max': '639px'}
        },
        backgroundImage: {
          'background_index': `url(./src/assets/images/background_index.png)`,
          'background_mobile': `url(./src/assets/images/background_mobile.png)`,
        }
      }
    },
    variants: {},
    plugins: []
  }
  