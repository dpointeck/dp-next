import localFont from "next/font/local";

export const inter = localFont({ src: "../fonts/Inter/Inter-Regular.woff" });
export const codeSaver = localFont({
    src: [
        {
            path: "../fonts/CodeSaver/CodeSaver-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/CodeSaver/CodeSaver-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/CodeSaver/CodeSaver-Italic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "../fonts/CodeSaver/CodeSaver-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
    ],
});

export const greycliff = localFont({
    src: [
        {
            path: "../fonts/Greycliff/GreycliffCF-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Greycliff/GreycliffCF-Heavy.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../fonts/Greycliff/GreycliffCF-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Greycliff/GreycliffCF-Thin.woff2",
            weight: "100",
            style: "normal",
        },
    ],
});