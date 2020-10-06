import { useRouter } from "next/router";

import "../fonts/Inter/inter.css";
import "../fonts/Greycliff/greycliff.css";
import "../fonts/CodeSaver/codesaver.css";
import "../styles/index.css";

import NavHome from "../components/homeNav";
import NavDefault from "../components/defaultNav";

const isHome = () => {
  const router = useRouter();
  console.log(router.pathname);
  return router.pathname === "/";
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      {isHome() ? <NavHome /> : <NavDefault />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
