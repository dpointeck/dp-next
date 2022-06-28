import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import Footer from "@components/footer";
import { ReactElement } from "react";

class DpDocument extends Document {
  
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
        <body className="pb-20 md:pb-0 dark:bg-emerald-800 dark:text-gray-100">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DpDocument;
