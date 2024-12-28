// REACT
import React from "react";

// NEXT JS
import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "./categoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h2>Popular Categories</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}>
            <Image
              src="/style.png"
              width={32}
              height={32}
              alt="small icon and link of X"
              className={styles.iconImage}
            />
            <p>CATEGORY ONE</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
