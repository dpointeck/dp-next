import {ThemeProvider} from "styled-components"

import theme from '../styles/theme'

import "../fonts/Inter/inter.css";
import "../fonts/Greycliff/greycliff.css";
import "../fonts/CodeSaver/codesaver.css";
import "../styles/index.css";

import Nav from "../components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
