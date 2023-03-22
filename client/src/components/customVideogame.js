import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios"
import styles from "./styles/customVideogame.module.css"
import { validateDate, validateGenres, validateName, validatePlatforms, validateRating, validateReleaseDate, validateSummary } from "./validations";


export default function CustomVideogame(){

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
        platforms: "",
        released: "",
        rating: "",
        genres: ""
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
        if(!e.target.value){
            setError({...error, [e.target.name] : e.target.value })
        }
        setForm({...form, [e.target.name] : e.target.value})
    }
    const imageHandler = async (e) => {
        const file = e.target.files[0];
        if (!file.type.startsWith('image/')){
            alert("File must be an Image!!")
            e.target.value=""
        }else{
           setForm({...form, image: await uploadImage(file)}) 
        }
        
      };
    const resetForm = ()=>{
        setForm({
            name: "",
            image: "",
            summary: "",
            platforms: [],
            released: "",
            rating: "",
            genres: []
                    })
    }

      async function uploadImage (file) {
        const body = {
          UPLOADCARE_PUB_KEY: "846a3d406b9aba0029a9",
          file,
        };
      
        const {data} = await axios.postForm("https://upload.uploadcare.com/base/", body)
        return `https://ucarecdn.com/${data.file}/`
      }

      const submitHandler = async (e) => {
        e.preventDefault();
        setError({
        name:"",
        image: "",
        summary: "",
        platforms: "",
        released: "",
        rating: "",
        genres: ""
        })
        const nameError = validateName(form.name)
        const summaryError = validateSummary(form.summary)
        const platformError = validatePlatforms(form.platforms)
        const ratingError = validateRating(form.rating)
        const releaseError = validateReleaseDate(form.released)
        const genresError = validateGenres(form.genres)
        const dateError = validateDate(form.released)

        setError({name:nameError, summary: summaryError, platforms:platformError, rating: ratingError,
        released:releaseError, genres: genresError, released: dateError})

        try{
            if(Object.values(error).every((value) => value === "")){
          await  axios.post("/videogames", {name: form.name,summary: form.summary,platform: form.platforms,released: form.released,rating: form.rating,genres: form.genres,image: form.image} )
            .then(response =>{ alert(response.data.message)
                resetForm()
            })
        }} catch(error){
            alert(error.response.data)
        }
        
        ;}

       return(
        <>
        <div className={styles.general}>
            <h1>Create a videogame</h1>
        <form onSubmit={submitHandler}>
            <label> Name <input value={form.name} type="text" name="name" onChange={changeHandler}></input> </label>
            <div className={styles.error}>{error.name&&error.name}</div>
            <label> Summary <input value={form.summary} type="text" name="summary" onChange={changeHandler}></input> </label>
            <div className={styles.error}>{error.summary&&error.summary}</div>
            <label> Realease <input value={form.released} type="date" name="released" onChange={changeHandler}></input> </label>
            <div className={styles.error}>{error.released&&error.released}</div>
            <label> Rating <input value={form.rating} type="number" name="rating" onChange={changeHandler}></input> </label>
            <div className={styles.error}>{error.rating&&error.rating}</div>
            <label> Platforms 
                <select name="platforms" onChange={selectHandler}>
                    <option disabled selected> Choose platforms</option>
                    {platforms.map(platform =>
                        <option value={platform.name} key={platform.id}>{platform.name}</option>)}
                </select>
                 </label>
                 <div className={styles.error}>{error.platforms&&error.platforms}</div>
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
                 <div className={styles.error}>{error.genres&&error.genres}</div>
            <div className={styles.div}>
                {
                    form.genres.map(genre=>
                        <span>
                            {genre} <button name="genres" value={genre} onClick={deleteHandler}>x</button>
                        </span>)
                }
            </div>
            <label> Image <input  type="file" name="image" onChange={imageHandler}></input> </label>

             <input className={styles.submit} type="submit"></input> 
        </form></div>
        </>
    )
}