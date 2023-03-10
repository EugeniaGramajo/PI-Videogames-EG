import React, { useState } from "react";
import{ Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { validateUser } from "../redux/actions";
import { useHistory } from "react-router-dom";


export default function Login(){
    const navigate = useHistory()

    const user = useSelector(state=> state)
    const [state, setState] = useState({
        username: "",
        password:""
    })
    const [error, setError]  = useState({
        username:"",
        password:""
    })
    const dispatch = useDispatch()

    const submitHandler = async (e)=>{
        e.preventDefault()
        try {
          const validation = await axios.post("http://localhost:3001/users/validate",{
            username: state.username,
            password: state.password
          })  
          console.log(validation)
           if(validation.data.res==="User validated"){
            localStorage.setItem("user", state.username);
           dispatch(validateUser(validation.data.user.id))
           console.log(user)
           navigate.push("/home")
        }} catch(e){
            if(e.response.data === "Password incorrect"){
                setError(error.password="" ,error.username="")
                setError({...error, password: e.response.data})
            }else if(e.response.data === "User not found"){
                setError(error.password="" ,error.username="")
                setError({...error, username:e.response.data})
            }
        }   
    }
    const changeHandler = (e)=>{
        e.preventDefault()
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return(
        <>
        <div >
        <form onSubmit={submitHandler}>
            <h2>We miss you!</h2>
           <label>Username: <input value={state.username} name="username" 
           onChange={changeHandler} type="text"></input>
           </label> 

           <label>Password:<input value={state.password} name="password" 
           onChange={changeHandler} type="password"></input>
           </label> 
          {error.password==="Password incorrect"? <p>Password incorrect</p> : ""}
          {error.username==="User not found"? <p>User not found</p> : ""}
           <label><input type="submit" value={"Log in"}></input></label> 


           <h3> Do not have user? Register
            <Link to={"/register"} > Here</Link></h3>
        </form>
        </div>
        </>
    )
}