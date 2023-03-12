import React from "react";
import { useDispatch } from "react-redux";
import { ratingFilter } from "../../../redux/actions";
import styles from "../../styles/filters.module.css"

export default function Rating() {

    const dispatch = useDispatch()
    const selectHandler =  (e)=>{
        dispatch(ratingFilter(e.target.value))
    }
    
  return (
    <>
      <select className={styles.select} onChange={selectHandler}>
        <option disabled selected>
          Order by rating
        </option>
        <option value="asc">Better rated</option>
        <option value="des">Worst rated</option>
      </select>
    </>
  );
}
