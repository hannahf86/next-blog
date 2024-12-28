"use client";

// REACT
import React, { useState } from "react";

// NEXT JS
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  // temporay
  const status = "notAuthenticated";

  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/newPost" className={styles.link}>
            New Post
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink}>
            HOME
          </Link>
          <Link href="/services" className={styles.mobileLink}>
            WHAT WE DO
          </Link>
          <Link href="/blog" className={styles.mobileLink}>
            BLOG
          </Link>
          <Link href="/contact" className={styles.mobileLink}>
            GET IN TOUCH
          </Link>
          {status === "notAuthenticated" ? (
            <Link href="/login" className={styles.mobileLogin}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/newPost" className={styles.mobileNew}>
                New Post
              </Link>
              <span className={styles.mobileLogOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
