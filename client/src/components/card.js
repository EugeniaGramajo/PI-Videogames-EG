import React from "react";
import styles from "./styles/card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className={styles.cardcontainer}>
        <Link to={`/videogames/${props.id}`}>
          <div className={styles.cardimage}>
            <div className={styles.divimg}>
              <img className={styles.img} src={props?.image} alt={props.name} />
            </div>
            <div className={styles.cardinfo}>
              <p className={styles.cardname}>{props.name}</p>
              <div className={styles.genres}>
                {props.genres.map((g) => (
                  <li>{g.name}</li>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
