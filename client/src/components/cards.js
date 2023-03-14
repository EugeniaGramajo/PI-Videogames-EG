import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import FilterBar from "./filtersBar";
import Loading from "./loading";
import styles from "./styles/cards.module.css"

export default function Cards (){

    const games = useSelector(state=>state.paginationGames)
    const notFound = useSelector(state=>state.notFound)
    return(
        <>
       <div className={styles.general}>
        <FilterBar></FilterBar>
        <div className={styles.cards} >
             
          {
            notFound===true? <Loading></Loading> :
        games?.map(game =>
     <Card name={game.name} id={game.id} image={game.image[0].image? game.image[0].image : game.image} genres={game.genres? game.genres : game.Genres}></Card>)
        }  
        </div>
        </div>
        </>
    )
}