import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Footer from "@components/footer";
import { ReactElement } from "react";

class DpDocument extends Document {
  static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="vTEzO8d5lqdjmewCVAFto1DTheaJF7IyYuuLGjQxGoQ"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
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
