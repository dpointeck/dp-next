import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';

import theme from '../styles/theme';

import '../fonts/Inter/inter.css';
import '../fonts/Greycliff/greycliff.css';
import '../fonts/CodeSaver/codesaver.css';
import '../styles/index.css';

import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
    <>
      <Helmet
        titleTemplate={
          isHome
            ? 'Daniel Pointecker - Software Engineer'
            : '%s | dpointeck.dev'
        }>
        <title>Daniel Pointecker</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
