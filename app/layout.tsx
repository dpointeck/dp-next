import { Nav } from "components/nav";
import localFont from 'next/font/local';

const inter = localFont({ src: 
    "../fonts/Inter/Inter-Regular.woff"
})

import "@fonts/Greycliff/greycliff.css";
import "@fonts/CodeSaver/codesaver.css";
import "@styles/index.css";
import Footer from "components/footer";
import Fathom from "components/Fathom";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="google-site-verification"
                    content={`${String(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID)}`}
                />
                <meta name="robots" content="all" />
            </head>
            <body>
                <Fathom />
                <Nav />
                <div>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
