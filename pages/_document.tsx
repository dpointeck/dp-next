import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "@components/footer";
import { ReactElement } from "react";
import * as process from "process";

class DpDocument extends Document {
  
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content={`${String(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFY_ID)}`}
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
