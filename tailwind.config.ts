import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8F3',
          100: '#F9EBE0',
          200: '#F3D5C1',
          300: '#EDBFA2',
          400: '#E7A983',
          500: '#E19364',
          600: '#B47650',
          700: '#87593C',
          800: '#5A3B28',
          900: '#2D1E14'
        },
        secondary: {
          50: '#F5F7FA',
          100: '#E4E7EB',
          200: '#CBD2D9',
          300: '#9AA5B1',
          400: '#7B8794',
          500: '#616E7C',
          600: '#52606D',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933'
        },
        accent: '#E19364',
        background: '#FDF8F3',
        text: '#1F2933',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};

export default config;