import React from "react";
import styles from "./styles/loading.module.css";

export default function Loading() {
  return (
    <>
      <div className={styles.spinner}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
      </div>
    </>
  );
}
