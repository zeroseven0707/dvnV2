import { useState, useEffect } from 'react';
import Link from 'next/link';
import burger from '../../public/styles/BurgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Default value false

  useEffect(() => {
    // Mengambil nilai isOpen dari localStorage saat komponen di-mount
    const localStorageValue = localStorage.getItem('isOpen');
    setIsOpen(localStorageValue === 'true'); // Mengubah string 'true' menjadi boolean true
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    localStorage.setItem('isOpen', !isOpen); // Mengubah nilai isOpen di localStorage
  };

  return (
    <div className={burger.burger}>
      <button className={burger.button} onClick={toggleMenu}>
        {isOpen ? (
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.69666" width="18" height="3" rx="1.5" transform="rotate(45 2.69666 0)" fill="#363636"/>
            <rect x="0.575439" y="12.728" width="18" height="3" rx="1.5" transform="rotate(-45 0.575439 12.728)" fill="#363636"/>
          </svg>
        ) : (
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="3" rx="1.5" fill="#363636"/>
            <rect y="7" width="18" height="3" rx="1.5" fill="#363636"/>
            <rect y="14" width="18" height="3" rx="1.5" fill="#363636"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className={burger.content}>
          <ul className={burger.ul}>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/product">
                Product
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/join-dealers">
                Join Dealers
              </Link>
            </li>
            <li>
              <div className={burger.translate}>
                <div className={burger.id}>ID</div>
                <div className={burger.en}>EN</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
