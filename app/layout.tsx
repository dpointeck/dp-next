import { Nav, MobileNav } from "components/nav";
import localFont from 'next/font/local';

const inter = localFont({ src: 
    "../fonts/Inter/Inter-Regular.woff"
})
//import "@fonts/Inter/inter.css";
import "@fonts/Greycliff/greycliff.css";
import "@fonts/CodeSaver/codesaver.css";
import "@styles/index.css";
import "@styles/prism-synthwave.css";
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
            <body className="pb-20 md:pb-0 dark:bg-emerald-800 dark:text-gray-100">
                <Fathom />
                <Nav />
                <MobileNav />
                <div className="layout-page container mx-auto p-4 md:px-10">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
