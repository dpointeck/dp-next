import { useRouter } from "next/router";

import "../fonts/Inter/inter.css";
import "../fonts/Greycliff/greycliff.css";
import "../fonts/CodeSaver/codesaver.css";
import "../styles/index.css";

import Nav from "../components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
