import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Home.css";
import GridBreedDogs from "./GridBreedDogs";

const Home = () => {
  const [dataBreeds, setDataBreeds] = useState(null);

  return (
    <div className="NavBarStyle">
      <NavBar setDataBreeds={setDataBreeds} />{" "}
      <GridBreedDogs dataBreeds={dataBreeds} />
    </div>
  );
};

export default Home;
