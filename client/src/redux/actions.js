import axios from "axios"
export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const GET_USER = "GET_USER"
export const CURRENT_PAGE = "CURRENT_PAGE"
export const PAGINATION_GAMES ="PAGINATION_GAMES"
export const GET_GENRES = "GET_GENRES"
export const GENRES_FILTER = "GENRES_FILTER"
export const ORIGINAL = "ORIGIN"
export const CREATED = "CREATED"
export const RATING = "RATING"
export const SORT = "SORT"
export const PLATFORMS = "PLATFORMS"
export const GET_USERS = "GET_USERS"
export const VALIDATE_USER = "VALIDATE_USER"
export const LOG_OUT = "LOG_OUT"
export const SEARCH = "SEARCH"
export const ACTIVE_NAVBAR = "ACTIVE_NAVBAR"
export const DETAIL_GAMES = "DETAIL_GAME"
export const GET_RANDOM_GAMES = "GET_RANDOM_GAMES"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const FILTERS = "FILTERS"


export const getVideogames = () => async (dispatch) => {
  try {
    const response = await axios.get("/videogames");
    dispatch({
      type: GET_VIDEOGAMES,
      payload: response,
      
    });
  } catch (error) {
    console.log(error);
  }
};

export const currentPage = (page)=>{
    return {
      type: CURRENT_PAGE,
      payload:page
    }
}

export const paginationGames = (payload)=>{
    return {
      type: PAGINATION_GAMES,
      payload:payload
    }
}

export const getGenres = ()=> async (dispatch)=>{
  try {
    const genres = await axios.get("/genres")
    dispatch({
      type: GET_GENRES,
      payload: genres
    })
  } catch(error) {
    console.log(error)
  }
}

export const filterGenres = (payload)=>{
  return{
    type:GENRES_FILTER,
    payload:payload
  }
}

export const original = ()=> async (dispatch)=>{
    try {
      const data = await axios.get("/videogames/api")
      console.log("original data",data.data)
      dispatch({
        type: ORIGINAL,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
}

export const created = ()=> async (dispatch)=>{
  try {
    const data = await axios.get("/videogames/db")
    console.log("createddata",data.data)
    dispatch({
      type: CREATED,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const ratingFilter = (payload)=>{
  return{
    type: RATING,
    payload: payload
  }
}

export const sortFilter = (payload)=>{
  return {
    type: SORT,
    payload:payload
  }
}

export const getPlatforms = () => async (dispatch)=>{
  try {
    const data = await axios.get("/platforms")
    dispatch({
      type: PLATFORMS,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getUsers = ()=> async (dispatch) =>{
  try {
    const res = await axios.get("/users")
    dispatch(
      {type:GET_USERS,
      payload: res}
    )
  } catch (error) {
    console.log(error)
  }
}

export const validateUser = (user)=>{
  return{
    type:VALIDATE_USER,
    payload:user
  }
}

export const logOut = ()=>{
  return{
    type:LOG_OUT
  }
}

export const search = (search)=> async (dispatch) =>{
  try {
    const res = await axios.get(`/videogames?name=${search}`)
    dispatch(
      {type:SEARCH,
      payload: res}
    )
  } catch (error) {
    dispatch({
      type:SEARCH,
      payload: error.response
    })
  }
}

export const mobileNavBar = ()=>{
  return {
    type: ACTIVE_NAVBAR
  }
}

export const detailGame = (id) => async (dispatch)=>{
  try{const res = await axios.get(`/videogames/${id}`)
  dispatch(
    {type:DETAIL_GAMES,
    payload: res}
  )} catch(error){
    console.log(error)
  }
}

export const getRandomGames = ()=>{
    return {
      type:GET_RANDOM_GAMES
    }
}

export const getUser = (id)=>async (dispatch)=>{

 try{ const res = await axios.get(`/users/${id}`)
 dispatch({
    type:GET_USER,
    payload: res
  })}catch(error){
    console.log(error)
  }
}

