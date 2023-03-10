import React from "react";
import { useSelector} from "react-redux"
import styles from "../styles/ButtonMenu.module.css";

export default function ButtonStyle(props) {
  const container = styles.container;
  const change = styles.change;

  const aux = useSelector(state=>state.navbar)

  return (
    <>
      <div className={`${ aux? change : container}`}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </>
  );
}
