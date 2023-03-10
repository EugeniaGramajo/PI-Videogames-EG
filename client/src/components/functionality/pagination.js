import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/pagination.module.css";
import { useEffect } from "react";
import { currentPage, paginationGames } from "../../redux/actions";

export default function Pagination() {
  const dispatch = useDispatch();
  const showGames = useSelector((state) => state.showGames);
  const currentPageS = useSelector((state) => state.currentPage);
  const gamesPerPage = 9;
  const totalPages = Math.ceil(showGames?.length / gamesPerPage);
  const quantity = currentPageS * gamesPerPage;
  const firstPage = quantity - gamesPerPage;
  const games = showGames?.slice(firstPage, quantity);

  useEffect(() => {
    dispatch(paginationGames(games));
  }, [showGames,currentPageS]);

  const prevHandler = () => {
    if (currentPageS === 1) {
      dispatch(currentPage(totalPages));
    } else {
      dispatch(currentPage(currentPageS - 1));
    }
  };
  const nextHandler = () => {
    if (currentPageS === totalPages) {
      dispatch(currentPage(1));
    } else {
      dispatch(currentPage(currentPageS + 1));
    }
  };

  return (
    <>
    <div className={styles.general}>
      <div>
        <button  className={styles.arrowleft} onClick={prevHandler}>{"<"}</button>{" "}
      </div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button className={`${styles.buttons} ${currentPageS===index+1 ? styles.active : ""}`} key={index} onClick={() => dispatch(currentPage(index + 1))}>
          {index + 1}
        </button>
      ))}
      <div>
        <button  className={styles.arrowright} onClick={nextHandler}>{">"}</button>
      </div>
    </div>
    </>
  );
}
