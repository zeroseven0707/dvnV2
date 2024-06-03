import Link from "next/link";
import { useState } from 'react';
import navbar from "../../public/styles/navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={navbar.nav}>
        <Link href="/">
          <img src="image/logo.png" className={navbar.dvn} alt="Logo" width={87} height={44.47} />
        </Link>
        <ul className={navbar.navLinks}>
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
            <div className={navbar.translate}>
              <div className={navbar.id}>ID</div>
              <div className={navbar.en}>EN</div>
            </div>
          </li>
        </ul>
        {/* <div className={navbar.hamburgerMenu}>
          <button 
            className="p-2 bg-gray-800 text-white rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="18" height="3" rx="1.5" fill="#363636"/>
              <rect y="7" width="18" height="3" rx="1.5" fill="#363636"/>
              <rect y="14" width="18" height="3" rx="1.5" fill="#363636"/>
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <ul>
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
              </ul>
            </div>
          )}
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
