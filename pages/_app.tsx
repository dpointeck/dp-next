import { useRouter } from "next/router";
import { AppProps } from "next/app";


import "../fonts/Inter/inter.css";
import "../fonts/Greycliff/greycliff.css";
import "../fonts/CodeSaver/codesaver.css";
import "../styles/index.css";
import "../styles/prism-synthwave.css";

import { Nav, MobileNav } from "../components/nav";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <> 
      <Nav />
      <Component {...pageProps} />
      <MobileNav />
    </>
  );
}


