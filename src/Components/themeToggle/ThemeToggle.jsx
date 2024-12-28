"use client";

// REACT
import React, { useContext } from "react";

// NEXT JS
import Image from "next/image";

// STYLES
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { background: "#FFFFFF" } : { background: "#262626" }
      }>
      <Image
        src="/moon.png"
        alt="moon icon for dark mode"
        width={16}
        height={16}
      />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { background: "#FFFFFF", left: 1 }
            : { background: "#262626", right: 1 }
        }></div>
      <Image
        src="/sun.png"
        alt="moon icon for dark mode"
        width={16}
        height={16}
      />
    </div>
  );
};

export default ThemeToggle;
