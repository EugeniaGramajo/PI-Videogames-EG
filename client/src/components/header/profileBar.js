import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/actions";
import styles from "../styles/profileBar.module.css"

export default function ProfileBar(){
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    console.log(user)
    
    return(
        <>
        <div className={styles.general}>
        <div className={user=== "" ? styles.button : styles.active}>
            <Link to={"/login"} className={styles.link}>LogIn</Link>
            <Link to={"/register"} className={styles.link}>Register</Link>
        </div>
        <div className={user!== "" ? styles.profile : styles.active }>
            <div className={styles.profile}>Hi, {user?.username}!</div>
            <div className={styles.logout} onClick={()=>dispatch(logOut())}>Log out</div>
        </div>
        </div>
        </>
    )
}