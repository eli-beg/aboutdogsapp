import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Home.css";
import GridBreedDogs from "./GridBreedDogs";
import GridDogsHome from "./GridDogsHome";
import { getBreeds } from "../api/dogsApi";

const Home = () => {
  const [dataBreeds, setDataBreeds] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [breedToShow, setBreedToShow] = useState("");

  useEffect(() => {
    getBreeds().then((r) => setDogs(r));
  }, []);
  const handleShowBreeds = (e) => {
    const value = e.target.name;
    setBreedToShow(value);
  };

  return (
    <div className="NavBarStyle">
      <NavBar
        setDataBreeds={setDataBreeds}
        handleShowBreeds={handleShowBreeds}
      />{" "}
      <GridBreedDogs dataBreeds={dataBreeds} />
      <GridDogsHome dogs={dogs} breedToShow={breedToShow} />
    </div>
  );
};

export default Home;
