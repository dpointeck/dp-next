import Document, { Html, Head, Main, NextScript } from 'next/document';

class DpDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='shortcut icon' href='/favicon.svg' />
        </Head>
        <body>
          <Main />
          <NextScript className='relative' />
        </body>
      </Html>
    );
  }
}

export default DpDocument;
