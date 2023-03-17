import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailGame, restetDetail } from "../redux/actions";
import Loading from "./loading";
import styles from "./styles/details.module.css";

export default function Details() {
    
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailGame);
  console.log(details)
  const [currentImage, setCurrentImage] = useState("")
  useEffect(() => {
    dispatch(restetDetail())
    dispatch(detailGame(id));
  }, []);
  useEffect(() => {
    if (details.image2) {
      setCurrentImage(details.image);
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
  return (
    <>
{  details.length===0 ? <div className={styles.div}><Loading></Loading></div> :   <div className={styles.general}>
        <h1>{details?.name}</h1>
    <div className={styles.imgsum}>
        <div>
         <img src={currentImage} alt={details.name}></img>
         <div className={styles.id}>
            <p>Rating: {details.rating}</p> 
            <p>ID: {details.id}</p>  
          </div>
          {<div>
           <p>WebPage:</p>
            {details.webpage? <a href={details.webpage} target="_blank">{details.webpage}</a> : <p>This game do not have a webpage</p>}  
         </div>}
          
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
            <il>{plat.platform?.name? plat.platform?.name : plat}</il>)}
    </div>
    <div>
      <h3>Released:</h3>
        <p> {details.released}</p>
    </div>
    </div>
<div className={styles.tag}>
    {details.tags?.map(tag=>
        <il>{tag?.name}</il>)}
</div>
      </div>}
    </>
  );
}
