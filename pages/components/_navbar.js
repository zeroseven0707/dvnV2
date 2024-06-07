import Link from "next/link";
import { useState } from 'react';
import navbar from "../../public/styles/navbar.module.css";

const Navbar = () => {
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
      </nav>
    </div>
  );
};

export default Navbar;
