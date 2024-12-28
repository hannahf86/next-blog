// server side component

// REACT
import React from "react";

// NEXT JS
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  // temporay
  const status = "notAuthenticated";

  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/newPost">New Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
