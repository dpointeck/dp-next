import { useEffect } from 'react';
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import * as Fathom from 'fathom-client';

import "../fonts/Inter/inter.css";
import "../fonts/Greycliff/greycliff.css";
import "../fonts/CodeSaver/codesaver.css";
import "../styles/index.css";
import "../styles/prism-synthwave.css";

import { Nav, MobileNav } from "../components/nav";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('FZNGXPBT', {
      includedDomains: [
          'daniel-pointecker.net', 
          'www.daniel-pointecker.net', 
          'dpointeck.dev', 
          'www.dpointeck.dev'
        ],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <MobileNav />
    </>
  );
}


