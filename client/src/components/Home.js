import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./Home.css";
import GridBreedDogs from "./GridBreedDogs";
import GridDogsHome from "./GridDogsHome";
import { getBreeds } from "../api/dogsApi";
import { newBreeds } from "../api/myApi";
import Button from "@mui/material/Button";
import { ButtonBase } from "@mui/material";

const Home = () => {
  const [dataBreeds, setDataBreeds] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [newDogs, setNewDogs] = useState(null);
  const [breedToShow, setBreedToShow] = useState("allbreeds");

  useEffect(() => {
    getBreeds().then((r) => setDogs(r));
  }, []);
  const handleShowBreeds = (e) => {
    const value = e.target.name;
    setBreedToShow(value);
  };
  useEffect(() => {
    newBreeds().then((r) => {
      setNewDogs(r.data);
    });
  }, []);

  let allDogs = [];
  if (dogs && newDogs) {
    allDogs = dogs.concat(newDogs);
  }

  return (
    <div className="NavBarStyle">
      <NavBar
        setDataBreeds={setDataBreeds}
        handleShowBreeds={handleShowBreeds}
      />{" "}
      <Button>Este es un boton</Button>
      <GridBreedDogs dataBreeds={dataBreeds} />
      <GridDogsHome
        dogs={dogs}
        breedToShow={breedToShow}
        allDogs={allDogs}
        newDogs={newDogs}
      />
      <div></div>
    </div>
  );
};

export default Home;
