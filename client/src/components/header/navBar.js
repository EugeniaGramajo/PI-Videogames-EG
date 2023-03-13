import React from "react";
import Search from "./search";
import styles from "../styles/navBar.module.css"
import ButtonMenu from "../header/buttonMobile"
import { useSelector } from "react-redux";
import MenuMobile from "./menuMobile";
import { Link } from "react-router-dom";
import ProfileBar from "./profileBar";

export default function NavBar(){

    const activeNavBar = useSelector(state=>state.navbar)
    console.log(activeNavBar)

    return(
        <>
        <ProfileBar></ProfileBar>
        <div className={styles.general}>
            <Link to={"/"}> <div className={styles.logo}>
             <img src="https://i.imgur.com/5rqOtaZ.png" alt="logo"/>
            <h1>Henry</h1>   
            </div></Link>
        
            <div className={styles.itemList}>
                <Link to={"/home"}><div>Home</div></Link>
                <Link to={"/create"}><div>Create a new game</div></Link>
                <Link to={"/about"}><div>About</div></Link>
                
            </div>
            <div > <Search></Search></div>
           

        </div>
        <div className={styles.hidden}></div>
        <div className={styles.search}>
        <div className={styles.generalResponsive}>
            <ButtonMenu></ButtonMenu>
            <Link to={"/"}> <div className={styles.logo}>
             <img src="https://i.imgur.com/5rqOtaZ.png" alt="logo"/>
            <h1>Henry</h1>   
            </div></Link>
                    
       
        </div><div className={styles.search}> <Search></Search></div>
        
        </div>
        <MenuMobile></MenuMobile>
 </>
    )
}