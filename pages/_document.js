import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="image/dvn-logo.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VLQGC346BX"></Script>
          <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VLQGC346BX');
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

