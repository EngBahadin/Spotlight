/** @type {import('tailwindcss').Config} */
//import { Colors_config } from "./constants/Colors";
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // 👈 catches index.tsx, _layout.tsx, etc
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        space_mono: ["space-mono-regular"], // <-- name you used in useFonts
      },
      colors: {
  //      ...Colors_config, // spread them in
      },
    },
  },
  plugins: [],
};
