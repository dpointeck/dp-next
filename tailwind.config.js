module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  mode: "jit",
  purge: {
    layers: ["utilities"],
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    fontFamily: {
      sans: [
        "Greycliff",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      mono: [
        "Codesaver",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGabUtilities: true,
    purgeLayersByDefault: true,
  },
};
