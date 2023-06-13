/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'Josefin': ['Josefin Slab', 'serif'],
          'Nanum': ['Nanum Myeongjo', 'serif']
        },

    },
  },
  plugins: [],
}

