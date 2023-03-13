import "./App.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { getGenres, getPlatforms, getRandomGames, getVideogames } from "../src/redux/actions";
import Cards from "./components/cards";
import NavBar from "./components/header/navBar";
import LandingPage from "./components/Landing/landingPage";
import CustomVideogame from "./components/customVideogame";
import Details from "./components/details";
import Login from "./components/login";
import Register from "./components/register"
import axios from "axios";
axios.defaults.baseURL = "https://videogames-pi-eg.onrender.com/videogames"

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state)

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    dispatch(getPlatforms());
    dispatch(getRandomGames())
  }, []);

console.log(state)
  return (
    <div className="App">
      <Route exact path={"/"}>
        <LandingPage></LandingPage>
      </Route>
      <Route exact path={"/home"}>
        <NavBar></NavBar>
        <Cards></Cards>
      </Route>
      <Route exact path={"/create"}>
        <NavBar></NavBar>
        <CustomVideogame></CustomVideogame>
      </Route>
      <Route exact path={"/videogames/:id"}>
        <NavBar></NavBar>
          <Details></Details>
      </Route>
      <Route exact path={"/login"}>
        <Login></Login>
      </Route>
      <Route exact path={"/register"}>
        <Register></Register>
      </Route>
    </div>
  );
}

export default App;
