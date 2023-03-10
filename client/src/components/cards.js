import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import styles from "./styles/cards.module.css"
import Pagination from "./functionality/pagination"

export default function Cards (){

    const games = useSelector(state=>state.paginationGames)
    const notFound = useSelector(state=>state.notFound)
    return(
        <>
       <div className={styles.general}>

        <Pagination></Pagination>
        <div className={styles.cards} >
             
          {
            notFound===true? <div>Acá va a ir el componente not Found</div> :
        games?.map(game =>
     <Card name={game.name} id={game.id} image={game.image[0].image? game.image[0].image : game.image} genres={game.genres? game.genres : game.Genres}></Card>)
        }  
        </div>
        </div>
        </>
    )
}