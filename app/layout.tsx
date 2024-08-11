import { Nav } from "components/nav";

import "@styles/index.css";
import { codeSaver, greycliff, inter } from "./fonts";
import Footer from "components/footer";
import Fathom from "components/Fathom";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en"
            style={{
                '--font-inter': inter.style.fontFamily,
                '--font-code-saver': codeSaver.style.fontFamily,
                '--font-greycliff': greycliff.style.fontFamily
            } as React.CSSProperties}>
            <head>
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="google-site-verification"
                    content={`${String(
                        process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID
                    )}`}
                />
                <meta name="robots" content="all" />
            </head>
            <body>
                <Fathom />
                <Nav />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
