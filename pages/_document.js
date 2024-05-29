import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Navbar from "./components/_navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
