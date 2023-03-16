import React, { useState } from "react";
import axios from "axios"
import { Link, useHistory } from "react-router-dom";
import styles from "./styles/register.module.css"
import { validatePassword, validateUsername } from "./validations";

export default function Register(){
    const history = useHistory()
    const [form, setForm] = useState({
        username:"",
        email:"",
        password:""
    })
    const [error, setError] = useState({
        username:"",
        password:""
    })
    const [confirm, setConfirm] = useState({
        email:"",
        password:""
    })

    const submitHandler = async (e)=>{
        setError(error.email= "", error.password= "" ,error.username= "")
        e.preventDefault()
        if(validateUsername(form.username)&& validatePassword(form.password)){
             await axios.post("/users/create",{
            username: form.username,
            email:form.email,
            password:form.password,
        })
            window.alert("User created successfully")
            history.push("/login")

        }else{
            if(!validatePassword(form.password)){
                setError({...error, password: "Password should have at least an upper case, an lower case and a number"})
            }
            if(!validateUsername(form.username)){
                setError({...error, username:"Username should be in lowercase, be shorter than 10 characters and special characters are not allowed"})
            }
        }
        
    }
    const changeHandler = (e)=>{
        e.preventDefault()
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const confirmHandler = (e)=>{
        e.preventDefault()
        setConfirm({...confirm,[e.target.name]:e.target.value})
    }
    
    console.log(form)
    return(
        <>
        <div className={styles.container}>
        <div className={styles.general}>
            <div className={styles.backContainer}>
                <Link  className={styles.back} to={"/home"}>Go back</Link>
            </div>
        
        <form onSubmit={submitHandler}>

           <label>Username: <input value={form.username} onChange={changeHandler} name="username" type="text" required></input></label> 
           <label>E-mail:<input name="email" onChange={changeHandler} value={form.email} type="email" required></input></label> 
           <label>Confirm E-mail:<input value={confirm.email} onChange={confirmHandler} name="email" type="email" required></input></label> 
           <label>Password:<input name="password" onChange={changeHandler} value={form.password} type="password" required></input></label> 
           <label>Confirm Password:<input name="password" onChange={confirmHandler} value={confirm.password} type="password" required></input></label> 

            {form.email !== confirm.email ? <label>Email do not match</label> : null}
            {form.password !== confirm.password? <label>Password do not match</label> : null}
            {error.username && error.username}
            {error.password && error.password}
            
           <label className={styles.labelInput}><input className={styles.submit} type="submit" value={"Sign up"} disabled={form.email !== confirm.email || form.password !== confirm.password || !form.username || !form.password || !form.email}></input></label> 


           
        </form>
        </div></div>
        </>
    )
}