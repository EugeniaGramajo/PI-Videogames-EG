import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenres, getGenres, getVideogames } from "../../../redux/actions";

export default function Genres (){

    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)

    useEffect(()=>{
        dispatch(getGenres())
    },[])

    const filterHandler = async (e)=>{
       await dispatch(getVideogames())
        dispatch(filterGenres(e.target.name))
        console.log(e.target.name)
    }  
    return(
        <>

        {genres.map(genre=>
            <button onClick={filterHandler} name={genre.name}>{genre.name}</button>
        )}

        </>
    )
}