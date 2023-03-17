import React from "react";
import styles from "../styles/landing.module.css"
import {useSelector} from "react-redux"
import { stylesImage } from "./data";
import { Link } from "react-router-dom";

export default function LandingPage (){
    const background = useSelector(state=>state.backgroundImages)

    const images = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
     
    return (
        <>

        <div className={styles.general}>
        <div className={styles.landing} >
            <div className={`${styles.left} ${styles.gameCol}`}>
{
 images.map(i=>
   i<8 && <Link to={`/videogames/${background[i]?.id}`}>
    <div >
        <img style={stylesImage[i]} src={background[i]?.image} alt={background[i]?.name}></img>
    </div>
    </Link>)   
} 
            </div>
            <div className={styles.presentation}>
                <h1>Check info of your favorite games!</h1>
                <h2>
                    You will find more than 5000 games in our web page, filter by the rating or your favourite type.
                </h2>
                <Link to={"/home"}><button>Let's check!</button></Link>
                
            </div>
            <div className={`${styles.right} ${styles.gameCol}`}>
            {
 images.map(i=>
   i>7 && <Link to={`/videogames/${background[i]?.id}`}>
    <div >
        <img style={stylesImage[i]} src={background[i]?.image} alt={background[i]?.name}></img>
    </div>
    </Link>)   
} 
            </div>
        </div>
        </div>

        </>
    )
}