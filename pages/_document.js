import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Navbar from "./components/_navbar";
import Footer from "./components/_footer";
// import Burger from "./components/_burger";
import { useState } from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Navbar />
      {/* <Burger /> */}
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
