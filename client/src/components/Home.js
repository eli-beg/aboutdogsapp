import React from "react";
import NavBar from "./NavBar";
import "./Home.css";
import GridBreedDogs from "./GridBreedDogs";

const Home = () => {
  return (
    <div className="NavBarStyle">
      <NavBar /> <GridBreedDogs />
    </div>
  );
};

export default Home;
