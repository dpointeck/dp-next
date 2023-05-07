import { Nav, MobileNav } from "@components/nav";
import localFont from 'next/font/local';

const inter = localFont({ src: 
    "../fonts/Inter/Inter-Regular.woff"
})
//import "@fonts/Inter/inter.css";
import "@fonts/Greycliff/greycliff.css";
import "@fonts/CodeSaver/codesaver.css";
import "@styles/index.css";
import "@styles/prism-synthwave.css";
import Footer from "@components/footer";
import Fathom from "@components/Fathom";


 

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

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
            </head>
            <body>
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
