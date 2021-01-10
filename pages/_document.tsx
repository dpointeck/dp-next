import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Footer from "@components/footer";

interface DocProps {
  styleTags;
}

class DpDocument extends Document<DocProps> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="vTEzO8d5lqdjmewCVAFto1DTheaJF7IyYuuLGjQxGoQ"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
          {this.props.styleTags}
        </Head>
        <body className="pb-20 md:pb-0">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DpDocument;
