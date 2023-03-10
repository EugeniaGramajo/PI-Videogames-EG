import React from "react";
import { useDispatch } from "react-redux";
import { sortFilter } from "../../../redux/actions";

export default function Alphabet() {
  const dispatch = useDispatch();
  const selectHandler = (e) => {
    dispatch(sortFilter(e.target.value));
  };    
  return (
    <>
      <select onChange={selectHandler}>
        <option disabled defaultValue>
          Order by alphabet
        </option>
        <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
      </select>
    </>
  );
}
