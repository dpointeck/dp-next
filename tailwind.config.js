
const disabledCss = {
    'code::before': false,
    'code::after': false,
    'blockquote p:first-of-type::before': false,
    'blockquote p:last-of-type::after': false,
    pre: false,
    code: false,
    'pre code': false,
    'code::before': false,
    'code::after': false,
}

module.exports = {
    content: [
        "components/**/*.{js,ts,jsx,tsx}",
        "app/**/*.{js,ts,jsx,tsx}",
        "pages/**/*.{js,ts,jsx,tsx}",
    ],
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
            typography: {
                DEFAULT: { css: disabledCss },
                sm: { css: disabledCss },
                lg: { css: disabledCss },
                xl: { css: disabledCss },
                '2xl': { css: disabledCss },
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
