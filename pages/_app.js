// import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/fonts.module.css';
import '@/styles/globals.css';
import Navbar from './components/_navbar';
import '../i18next.config.mjs';

export default function App({ Component, pageProps }) {
  return(
    <>
  <Navbar />
  <Component {...pageProps} />
    </>
);}
