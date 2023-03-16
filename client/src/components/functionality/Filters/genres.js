import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { copyGames, filterGenres} from "../../../redux/actions";
import styles from "../../styles/filters.module.css"

export default function Genres (){

    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)

    const filterHandler =  (e)=>{
         dispatch(copyGames())
         dispatch(filterGenres(e.target.value))

     }  
     return(
         <>
             <select className={styles.select} onChange={filterHandler}>
                <option disabled selected>Select a genre</option>
                 {genres?.map(genre =>
                     <option key={genre.id} value={genre.name} >
                         {genre.name}
                     </option>
                 )}
             </select>
         </>
     )
 }