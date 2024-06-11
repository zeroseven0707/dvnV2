import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from "./components/_footer";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
