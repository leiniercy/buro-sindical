/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        "colors": {
          
        },
        "spacing": {},
        "fontFamily": {
          "poopins": "Poppins",
          "open-sans": "'Open Sans'"
        },
        "borderRadius": {
          
        },
        "fontSize": {
          "xl": "2rem",
          "lg": "1.5rem",
          "md": "1.25rem",
          "base": "1rem",
          "inherit": "inherit"
        }
      },
      "corePlugins": {
        "preflight": false
      }
    },
    plugins: [],
  }
  