import React from "react";
import { useDispatch } from "react-redux";
import { sortFilter } from "../../../redux/actions";
import styles from "../../styles/filters.module.css"

export default function Alphabet() {
  const dispatch = useDispatch();
  const selectHandler = (e) => {
    dispatch(sortFilter(e.target.value));
  };    
  return (
    <>
      <select className={styles.select} onChange={selectHandler}>
        <option disabled defaultValue>
          Order by alphabet
        </option>
        <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
      </select>
    </>
  );
}
