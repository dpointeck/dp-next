import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import { Nav, MobileNav } from '../components/Nav'
import { Footer } from '../components/Footer'
import Fathom from '../components/Fathom'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

const fontFaceCSS = `
@font-face {
  font-family: "Greycliff";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/Greycliff/GreycliffCF-Regular.woff2") format("woff2"),
    url("/fonts/Greycliff/GreycliffCF-Regular.woff") format("woff");
}
@font-face {
  font-family: "Greycliff";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("/fonts/Greycliff/GreycliffCF-Medium.woff2") format("woff2"),
    url("/fonts/Greycliff/GreycliffCF-Medium.woff") format("woff");
}
@font-face {
  font-family: "Greycliff";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/fonts/Greycliff/GreycliffCF-Bold.woff2") format("woff2"),
    url("/fonts/Greycliff/GreycliffCF-Bold.woff") format("woff");
}
@font-face {
  font-family: "Codesaver";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/CodeSaver/CodeSaver-Regular.woff2") format("woff2"),
    url("/fonts/CodeSaver/CodeSaver-Regular.woff") format("woff");
}
@font-face {
  font-family: "Codesaver";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/fonts/CodeSaver/CodeSaver-Bold.woff2") format("woff2"),
    url("/fonts/CodeSaver/CodeSaver-Bold.woff") format("woff");
}
`

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Daniel Pointecker - software dev',
      },
      {
        name: 'description',
        content:
          "Hi there! I'm Daniel a software dev from Austria. Checkout posts around web development and software engineering plus all kinds of useful resources",
      },
      {
        name: 'google-site-verification',
        content: import.meta.env.VITE_GOOGLE_SITE_VERIFY_ID || '',
      },
    ],
    links: [
      // Preload critical fonts to reduce FOUT
      {
        rel: 'preload',
        href: '/fonts/Greycliff/GreycliffCF-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/Greycliff/GreycliffCF-Bold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.svg',
      },
    ],
  }),

  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaceCSS }} />
        <HeadContent />
      </head>
      <body className="pb-20 md:pb-0">
        <Fathom />
        <Nav />
        <MobileNav />
        <div className="layout-page container mx-auto p-4 md:px-10">
          <Outlet />
        </div>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
