import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/fonts.module.css';
import "../public/styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import Navbar from './components/_navbar';
import '../i18next.config.mjs';

function MyApp({ Component, pageProps }) {
return (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);
}

export default appWithTranslation(MyApp);
