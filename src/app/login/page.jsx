//REACT
import React from "react";

// NEXT JS

// STYLES
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.social}>Sign in with Google</div>
        <div className={styles.social}>Sign in with Github</div>
        <div className={styles.social}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default Login;
