// server side component

// REACT
import React from "react";

// NEXT JS
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "./navbar.module.css";

// COMPONENTS
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.themeToggle}>
        <small className={styles.themeText}>Theme Change Here </small>
        <ThemeToggle />
      </div>
      {/* SOCIAL ICONS */}
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          <Image
            src="/facebook.png"
            alt="link to facebook page using facebook logo"
            width={24}
            height={24}
          />
          <Image
            src="/instagram.png"
            alt="link to instagram page using instagram logo"
            width={24}
            height={24}
          />
          <Image
            src="/tiktok.png"
            alt="link to tiktok page using tiktok logo"
            width={24}
            height={24}
          />
          <Image
            src="/youtube.png"
            alt="link to youtube page using youtube logo"
            width={24}
            height={24}
          />
        </div>
        {/* LOGO */}
        <div className={styles.logo}>
          <Image
            src="/jwdLogo.webp"
            alt="jorvik web dev main logo and link to home page"
            width={80}
            height={80}
          />
        </div>
        {/* LINKS */}
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            HOME
          </Link>
          <Link href="/services" className={styles.link}>
            SERVICES
          </Link>
          <Link href="/blog" className={styles.link}>
            BLOG
          </Link>
          <Link href="/contact" className={styles.link}>
            CONTACT
          </Link>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
