import Document, { Html, Head, Main, NextScript } from 'next/document'

class DpDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>  
        <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
          <body className="overflow-x-hidden xl:overflow-x-visible">
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}

export default DpDocument
