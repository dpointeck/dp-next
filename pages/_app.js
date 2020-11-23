import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';

import theme from '../styles/theme';

import '../fonts/Inter/inter.css';
import '../fonts/Greycliff/greycliff.css';
import '../fonts/CodeSaver/codesaver.css';
import '../styles/index.css';
import '../styles/prism-synthwave.css';

import { Nav, MobileNav } from '../components/nav';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === '/';
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

export default MyApp;
