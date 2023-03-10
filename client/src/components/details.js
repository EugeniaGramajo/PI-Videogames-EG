import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailGame } from "../redux/actions";
import styles from "./styles/details.module.css";

export default function Details() {
    
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const details = useSelector((state) => state.detailGame);
  const [currentImage, setCurrentImage] = useState("")
  useEffect(() => {
    dispatch(detailGame(id));
  }, []);
  useEffect(() => {
    if (details.image2) {
      setCurrentImage(details.image);
      setIsLoading(false);
    }else{
        setCurrentImage(details.image)
    }
  }, [details.image]);
  useEffect(() => {
    if (details.image2) {
      const timeoutId = setTimeout(changeImage, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentImage]);
  const changeImage = () => {
    if(currentImage===details.image){
      setCurrentImage(details.image2);  
    }
    if(currentImage===details.image2){
        setCurrentImage(details.image)
    }
    
  };
console.log(details)
  return (
    <>
      <div className={styles.general}>
        <h1>{details.name}</h1>
    <div className={styles.imgsum}>
        <div>
         <img src={currentImage} alt={details.name}></img>
         <div className={styles.id}>
            <p>Rating: {details.rating}</p> 
            <p>ID: {details.id}</p>  
          </div>
          <div>
           <p>WebPage:</p>
            {details.webpage? <a href={details.webpage}>{details.webpage}</a> : <p>This game do not have a webpage</p>}  
         </div>
          
        </div>
        
        <div>
            <p>{details.summary}</p>
        </div>
    </div>
    <div className={styles.list}>
    <div>
        <h3>Genres:</h3>
        {details.genres ? details.genres?.map(gen=>
            <il>{gen.name}</il>) : details.Genres?.map(gen=>
                <il>{gen.name}</il>)}
    </div>
    <div>
        <h3>Platforms:</h3>
        {details.platform?.map(plat=>
            <il>{plat.platform.name}</il>)}
    </div>
    <div>
      <h3>Released:</h3>
        <p> {details.released}</p>
    </div>
    </div>
<div className={styles.tag}>
    {details.tags?.map(tag=>
        <il>{tag.name}</il>)}
</div>
      </div>
    </>
  );
}
