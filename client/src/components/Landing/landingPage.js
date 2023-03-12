import React from "react";
import styles from "../styles/landing.module.css"
import {useSelector} from "react-redux"
import { stylesImage } from "./data";
import { Link } from "react-router-dom";
import Login from "../login";

export default function LandingPage (){
    const background = useSelector(state=>state.backgroundImages)
     
    return (
        <>
        <div className={styles.general}>
        <div className={styles.landing} >
            <div className={`${styles.left} ${styles.gameCol}`}>
            <Link to={`/videogames/${background[0]?.id}`}>
            <div >
                <img style={stylesImage[0]} src={background[0]?.image} alt={background[0]?.name}></img>
            </div>
            </Link>
            <Link to={`/videogames/${background[1]?.id}`}>
            <div >
                <img style={stylesImage[1]} src={background[1]?.image} alt={background[1]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[2]?.id}`}>
            <div >
                <img style={stylesImage[2]} src={background[2]?.image} alt={background[2]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[3]?.id}`}>
            <div >
                <img style={stylesImage[3]} src={background[3]?.image} alt={background[3]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[4]?.id}`}>
            <div >
                <img style={stylesImage[4]} src={background[4]?.image} alt={background[4]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[5]?.id}`}>
            <div >
                <img style={stylesImage[5]} src={background[5]?.image} alt={background[5]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[6]?.id}`}>
            <div >
                <img style={stylesImage[6]} src={background[6]?.image} alt={background[6]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[7]?.id}`}>
            <div >
                <img style={stylesImage[7]}src={background[7]?.image} alt={background[7]?.name}></img>
            </div>
            </Link> 
            </div>
            <div className={styles.presentation}>
                <h1>Check info of your favorite games!</h1>
                <h2>
                    You will find more than 5000 games in our web page, filter by the rating or your favourite type.
                </h2>
                <Link to={"/home"}><button>Let's check!</button></Link>
                
            </div>
            <div className={`${styles.right} ${styles.gameCol}`}>
            <Link to={`/videogames/${background[8]?.id}`}>
            <div >
                <img style={stylesImage[8]} src={background[8]?.image} alt={background[8]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[9]?.id}`}>
            <div >
                <img style={stylesImage[9]} src={background[9]?.image} alt={background[9]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[10]?.id}`}>
            <div >
                <img style={stylesImage[10]} src={background[10]?.image} alt={background[10]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[11]?.id}`}>
            <div >
                <img style={stylesImage[11]} src={background[11]?.image} alt={background[11]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[12]?.id}`}>
            <div >
                <img style={stylesImage[12]} src={background[12]?.image} alt={background[12]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[13]?.id}`}>
            <div >
                <img style={stylesImage[13]} src={background[13]?.image} alt={background[13]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[14]?.id}`}>
            <div >
                <img style={stylesImage[14]} src={background[14]?.image} alt={background[14]?.name}></img>
            </div>
            </Link> 
            <Link to={`/videogames/${background[15]?.id}`}>
            <div >
                <img style={stylesImage[15]} src={background[15]?.image} alt={background[15]?.name}></img>
            </div>
            </Link> 
            </div>
        </div>
        </div>

        </>
    )
}