import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { getGenres, getPlatforms, getVideogames } from "../src/redux/actions";
import Cards from "./components/cards";
import NavBar from "./components/header/navBar";
import LandingPage from "./components/landingPage";
import CustomVideogame from "./components/customVideogame";
import Details from "./components/details";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

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
    </div>
  );
}

export default App;
