import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

import theme from "@styles/theme";

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
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
        <MobileNav />
      </ThemeProvider>
    </>
  );
}


