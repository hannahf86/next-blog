// REACT
import React from "react";

// NEXT JS
import Image from "next/image";

// STYLES
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <b className={styles.h1Accent}>Web design & SEO</b> news for your{" "}
        <b className={styles.h1Accent}>small business or startup</b>
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

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.h3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            fugit!
          </h3>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            voluptatem, molestiae perferendis vel blanditiis officiis! Maiores
            sit natus beatae consectetur!
          </p>
          <button className={styles.postButton}>More this way...</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
