/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      macPaw: ["var(--font-mac-paw)", ...fontFamily.sans],
      sfPro: ["var(--font-sf-pro)", ...fontFamily.sans],
    },
    colors: {
      'black-main': "var(--black)",
      'green-main': "var(--green)",
      'white-main': "var(--white)",
      'white-secondary': "var(--white-1)",
    },
  },
};
export const plugins = [];
