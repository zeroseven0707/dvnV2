import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import navbar from "../../public/styles/navbar.module.css";

const Navbar = () => {
  const { t, i18n } = useTranslation('common');
  const [activeLanguage, setActiveLanguage] = useState('en');

  // Load language from local storage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setActiveLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div>
      <nav className={navbar.nav}>
        <Link href="/">
          <img src="image/logo.png" className={navbar.dvn} alt="Logo" width={87} height={44.47} />
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
          <li>
            <Link href="/join-dealers" suppressHydrationWarning>{t('join-dealers')}</Link>
          </li>
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
