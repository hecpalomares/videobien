import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={'es'}>
        <Head>
          <link rel='shortcut icon' href='/site/favicon.ico' />
          <meta name='description' content='VideoBien es una empresa dedicada en producción profesional de videoconferencias para el ámbito profesional.' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
