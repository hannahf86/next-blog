// REACT
import React from "react";

// STYLES
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <b className={styles.h1Accent}>Web design & SEO</b> tips and tricks for{" "}
        <b className={styles.h1Accent}>small business and startups</b>.
      </h1>
      <div className={styles.h2Container}>
        <div className={styles.box}></div>
        <h2 className={styles.h2}>
          <b>Hi! </b>
          My name is <b className={styles.h1Accent}>Hannah</b> and I am the
          founder of <b className={styles.h1Accent}>Jorvik Web Dev</b>. Welcome
          to my blog where I can teach you how to start your business online,{" "}
          <b className={styles.h1Accent}>the right way!</b>
        </h2>
      </div>
    </div>
  );
};

export default Featured;
