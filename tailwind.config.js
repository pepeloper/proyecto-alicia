import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        alicia: {
          blue: '#003046',
          'light-blue': '#D5E5E2',
          orange: '#FD8522',
          'light-orange': '#FFF0D8',
          'dark-orange': '#D27C4A',
          white: '#FDF3EA',

        },
      },
    },
  },

  plugins: [forms],
};
