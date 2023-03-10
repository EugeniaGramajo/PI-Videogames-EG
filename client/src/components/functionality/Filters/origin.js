import React from "react";
import { useDispatch } from "react-redux";
import { created, original } from "../../../redux/actions";
import styles from "../../styles/filters.module.css"

export default function Origin () {
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    const origin = e.target.value;
    if (origin === "created") {
      dispatch(created());
    } else if (origin === "original") {
      dispatch(original());
    }
  }

  return (
    <>
      <select className={styles.select} onChange={selectHandler}>
        <option disabled selected>Select an origin</option>
        <option value="created">CREATED</option>
        <option value="original">ORIGINAL</option>
      </select>
    </>
  );
}