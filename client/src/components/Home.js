import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Home.css";
import GridBreedDogs from "./GridBreedDogs";
import GridDogsHome from "./GridDogsHome";
import { getBreeds } from "../api/dogsApi";

const Home = () => {
  const [dataBreeds, setDataBreeds] = useState(null);
  const [dogs, setDogs] = useState(null);

  useEffect(() => {
    getBreeds().then((r) => setDogs(r));
  }, []);
  console.log("hola", dogs);
  return (
    <div className="NavBarStyle">
      <NavBar setDataBreeds={setDataBreeds} />{" "}
      <GridBreedDogs dataBreeds={dataBreeds} />
      <GridDogsHome dogs={dogs} />
    </div>
  );
};

export default Home;
