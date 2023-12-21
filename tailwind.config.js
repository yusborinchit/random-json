import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
