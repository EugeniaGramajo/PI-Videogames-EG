import React from "react";
import ButtonStyle from "./buttonStyles";
import styles from "../styles/ButtonMenu.module.css";
import { useDispatch} from "react-redux";
import { mobileNavBar } from "../../redux/actions";



export default function ButtonMenu(){
    const dispatch = useDispatch()
    const clickHandler = ()=>{
        dispatch(mobileNavBar())
    }

    return (
        <>
          <div className={styles.buttonGeneral}>
            <button className={styles.button} onClick={clickHandler}>
            <ButtonStyle></ButtonStyle>
            </button>
          </div>
        </>
      );
}