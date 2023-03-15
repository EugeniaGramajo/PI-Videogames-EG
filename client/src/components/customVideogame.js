import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import styles from "./styles/customVideogame.module.css"


export default function CustomVideogame(){

    const dispatch = useDispatch()
    const genres = useSelector(state=> state.genres)
    const platforms = useSelector(state=> state.platforms)
    const [form, setForm]  = useState({
        name: "",
        image: "",
        summary: "",
        platforms: [],
        released: "",
        rating: "",
        genres: []
    })
    const [error, setError] = useState({
        name:"",
        image: "",
        summary: "",
        platforms: [],
        released: "",
        rating: "",
        genres: []
    })
    const deleteHandler = (e)=>{
        e.preventDefault()
        const filtered = form[e.target.name].filter(del=> del !== e.target.value )
        setForm({...form, [e.target.name]:filtered})
    }
    const selectHandler = (e)=>{
        if(e.target.name==="genre"){
        const exist = form.genres.find(each=> each===e.target.value)
        if(!exist){
        const selectGenres = [...form.genres, e.target.value]
        setForm({...form, genres: selectGenres})
        } } else {
        const exist = form.platforms.find(each=> each===e.target.value)
        if(!exist){
            const selectPlatforms = [...form.platforms, e.target.value]
            setForm({...form, platforms: selectPlatforms})
        }
        }   
    }
    const changeHandler = (e)=>{
        e.preventDefault()
        setForm({...form, [e.target.name] : e.target.value})
    }
    const imageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = (event) => {
          const base64 = event.target.result;
          setForm({ ...form, image: base64 }); 
        };
      };

      const submitHandler = (e) => {
        e.preventDefault();
        setError({
        name:"",
        image: "",
        summary: "",
        platforms: [],
        released: "",
        rating: "",
        genres: ""
        })
        if(!form.name){
            setError({
                ...error, name: "Name can't be empty"
            })
        }
        if(form.name.length>20){
            setError({
                ...error, name: "Name can't have more than 20 characters"
            })
        }
        if(form.summary.length < 10 || form.summary.length > 100){
            setError({...error, summary: "Summary must be between 10 and 100 characters"})
        }
        if(form.platforms.length===0){
            setError({
                ...error, platforms: "Need to choose one at lease one platform"
            })
        }
        if(form.rating<0||form.rating>5){
            setError({
                ...error, rating: "Rating need to be higher than 0 and lower than 5"
            })
        }
        const data = {
          name: form.name,
          summary: form.summary,
          platform: form.platforms,
          released: form.released,
          rating: form.rating,
          genres: form.genres,
          image: form.image, 
        };
        if(Object.values(error).every((value) => value === "")){
            axios.post("/videogames", data)
        };
    };
      
    return(
        <>
        <div className={styles.general}>
            <h1>Create a videogame</h1>
        <form onSubmit={submitHandler}>
            <label> Name <input value={form.name} type="text" name="name" onChange={changeHandler}></input> </label>
            <label> Summary <input value={form.summary} type="text" name="summary" onChange={changeHandler}></input> </label>
            <label> Realease <input value={form.released} type="date" name="released" onChange={changeHandler}></input> </label>
            <label> Rating <input value={form.rating} type="number" name="rating" onChange={changeHandler}></input> </label>
            <label> Platforms 
                <select name="platforms" onChange={selectHandler}>
                    <option disabled selected> Choose platforms</option>
                    {platforms.map(platform =>
                        <option value={platform.name} key={platform.id}>{platform.name}</option>)}
                </select>
                 </label>
            <div className={styles.div}>
                {
                    form.platforms.map(platform =>
                        <span>
                            {platform} <button name='platforms' value={platform} onClick={deleteHandler}>x</button>
                        </span>)
                }
            </div>
            <label> Genres 
                <select name="genre" onChange={selectHandler}>
                    <option disabled selected>Choose genres</option>
                    {genres.map(genre=>
                        <option value={genre.name} key={genre.id}>{genre.name}</option>)}
                </select>
                 </label>
            <div className={styles.div}>
                {
                    form.genres.map(genre=>
                        <span>
                            {genre} <button name="genres" value={genre} onClick={deleteHandler}>x</button>
                        </span>)
                }
            </div>
            <label> Image <input  type="file" name="image" onChange={imageHandler}></input> </label>
            <div className={styles.errors}>
            <div>{error.name&&error.name}</div>
            <div>{error.summary&&error.summary}</div>
            <div>{error.platforms&&error.platforms}</div>
            <div>{error.rating&&error.rating}</div>
            </div>

             <input className={styles.submit} type="submit"></input> 
        </form></div>
        </>
    )
}