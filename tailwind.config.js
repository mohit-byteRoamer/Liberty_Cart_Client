/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  // theme: {
  //   extend: {},
  // },
  // plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],

  
  content: [
      './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths as necessary
      './public/index.html',
    ],
    plugins: [
      require('@tailwindcss/line-clamp'),
      // other plugins
    ],
    // other configurations
};