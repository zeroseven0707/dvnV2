import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="image/dvn-logo.svg" />
          {/* Menambahkan skrip untuk api_key */}
          <Script
            id="tracking-api-key"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.trackingApiKey = 'TddGvkPqgaq1kv6LOckmTwXnz8uHE859qlnqW3d8';
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Menambahkan skrip eksternal dengan strategi pemuatan yang benar */}
          <Script
            src="https://prahwa.net/tracking.js"
            strategy="afterInteractive"
            onLoad={() => {
              console.log('Tracking script loaded successfully.');
            }}
            onError={(e) => {
              console.error('Error loading tracking script:', e);
            }}
          />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VLQGC346BX"></Script>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
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
