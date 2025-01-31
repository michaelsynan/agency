import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        dino: {
          50: "#fcf7fb",
          100: "#f8eff7",
          200: "#f0deee",
          300: "#e3c4de",
          400: "#d1a1c8",
          500: "#ba7baf",
          600: "#9d5c90",
          700: "#8a4f7d",
          800: "#6a3e5f",
          900: "#593650",
          950: "#371b30",
        },
        juju: {
          50: "#f0fdfc",
          100: "#ccfbf6",
          200: "#99f6ec",
          300: "#5eeadb",
          400: "#2dd4c2",
          500: "#14b8a6",
          600: "#0d9485",
          700: "#0f766b",
          800: "#115e56",
          900: "#134e48",
          950: "#042f2a",
        },
      },
    },
  },
};
