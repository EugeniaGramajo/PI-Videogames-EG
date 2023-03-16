import React from "react";
import styles from "./styles/about.module.css"

export default function About(){

    return(
        <>
    <div className={styles.div}>
        <div className={styles.general}>
        <div>

        
            <h1>Thanks for visit my project!</h1>
            <p>I created a website as an individual project for Henry that incorporates various functionalities, such as filtering, searching, and image uploading. 
                This project was built using pure CSS, React, Redux, Node, Express, and Sequelize. It was deployed on both Railway and Vercel, and it took me three 
                weeks to complete. I am thrilled with the result and hope that people will enjoy using it.</p>

            

</div>

        
        <div className={styles.portfolio}>
            <a  href="https://eugeniagramajo.vercel.app/" target="_blank">Check my portfolio!</a>
        </div>
        </div></div>
        </>
    )
}