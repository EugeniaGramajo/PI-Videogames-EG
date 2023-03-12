import React from "react";
import Pagination from "./functionality/pagination";
import Genres from "./functionality/Filters/genres"
import Origin from "./functionality/Filters/origin"
import Alfa from "./functionality/Filters/alfa"
import Rating from "./functionality/Filters/rating"
import styles from "./styles/filters.module.css"

export default function FilterBar() {
  return (
    <>
    <div className={styles.general}>
      <Pagination></Pagination>  
    </div>
      
      <div className={styles.filters}>
        <Genres></Genres>
        <Origin></Origin>
        <Alfa></Alfa>
        <Rating></Rating>
      </div>
    </>
  );
}
