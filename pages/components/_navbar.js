import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import navbar from "@/styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const { t, i18n } = useTranslation('translation');
  const [activeLanguage, setActiveLanguage] = useState('en');

  // Function to initialize language from localStorage
  const initializeLanguage = () => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setActiveLanguage(storedLanguage);
    }
  };

  useEffect(() => {
    if (i18n.isInitialized) {
      initializeLanguage(); // Initialize language if i18n is already initialized
    } else {
      // Listen for initialization if i18n is not yet initialized
      const handleInitialized = () => {
        initializeLanguage();
        i18n.off('initialized', handleInitialized); // Clean up listener after initialization
      };
      i18n.on('initialized', handleInitialized);
    }

    // Clean up listener when component unmounts
    return () => {
      i18n.off('initialized', initializeLanguage);
    };
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div>
      <nav className={navbar.nav}>
        <Link href="/">
          <Image src="/image/logo.png" className={navbar.dvn} alt="logo" width={87} height={44.47} />
        </Link>
        <ul className={navbar.navLinks}>
          <li>
            <Link href="/" suppressHydrationWarning>{t('home')}</Link>
          </li>
          <li>
            <Link href="/about" suppressHydrationWarning>{t('about')}</Link>
          </li>
          <li>
            <Link href="/product" suppressHydrationWarning>{t('product')}</Link>
          </li>
          <li>
            <Link href="/faqs" suppressHydrationWarning>{t('faqs')}</Link>
          </li>
          {/* <li>
            <Link href="/join-dealers" suppressHydrationWarning>{t('join-dealers')}</Link>
          </li> */}
          <li>
            <div className={navbar.translate}>
              <button 
                className={`${navbar.id} ${activeLanguage === 'id' ? navbar.active : ''}`} 
                onClick={() => changeLanguage('id')}
              >
                ID
              </button>
              <button 
                className={`${navbar.en} ${activeLanguage === 'en' ? navbar.active : ''}`} 
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
