import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mobileNavBar } from "../../redux/actions";
import styles from "../styles/menuMobile.module.css"

export default function MenuMobile(){    
    const dispatch = useDispatch()
    const active = useSelector(state=>state.navbar)

    return(
        <>
            <div className={`${active? styles.itemList : styles.none}`}>
            <Link to={"/home"}><div onClick={()=>dispatch(mobileNavBar())}>Home</div></Link>
                <Link to={"/create"}><div onClick={()=>dispatch(mobileNavBar())}>Create a new game</div></Link>
                <Link to={"/about"}><div onClick={()=>dispatch(mobileNavBar())}>About</div></Link>
            </div>
        </>
    )
}