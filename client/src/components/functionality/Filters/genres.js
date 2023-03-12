import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenres, getGenres, getVideogames } from "../../../redux/actions";
import styles from "../../styles/filters.module.css"

export default function Genres (){

    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)

    useEffect(()=>{
        dispatch(getGenres())
    },[])
    const filterHandler = async (e)=>{
        await dispatch(getVideogames())
         dispatch(filterGenres(e.target.value))
         console.log(e.target.value)
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