import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { currentPage, getVideogames, search } from "../../redux/actions";
import styles from "../styles/search.module.css"
import { useHistory } from 'react-router-dom';


export default function Search (){
    const history = useHistory();
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const changeHandler = (e)=>{
        setInput(e.target.value)
    }
    const clickHandler = (e)=>{
        dispatch(search(input))
        dispatch(currentPage(1))
        history.push('/home')
    }
    const resetHandler = ()=>{
        dispatch(getVideogames())
        history.push('/home')
    }

    return(
        <>
        <div className={styles.display} >
            <div className={styles.general}>
            <input className={styles.input} value={input} onChange={changeHandler}></input>
            <button onClick={clickHandler}>
                <img src="https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png" alt="search" />
            </button></div>
            <button onClick={resetHandler}>Reset</button>
        </div>
        </>
    )
}