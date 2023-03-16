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
  }, [showGames, currentPageS]);

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

  const startButton = currentPageS <= 3 ? 1 : currentPageS - 2;
  const buttonsToShow = Math.min(totalPages - startButton + 1, 5);

  const buttons = Array.from({ length: buttonsToShow }, (_, index) => (
    <button
      className={`${styles.buttons} ${
        startButton + index === currentPageS ? styles.active : ""
      }`}
      key={startButton + index}
      onClick={() => dispatch(currentPage(startButton + index))}
    >
      {startButton + index}
    </button>
  ));

  return (
    <>
      <div className={styles.general}>
        <div>
          <button className={styles.arrowleft} onClick={prevHandler}>
            {"<"}
          </button>{" "}
        </div>

        {buttons}

        <div>
          <button className={styles.arrowright} onClick={nextHandler}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}