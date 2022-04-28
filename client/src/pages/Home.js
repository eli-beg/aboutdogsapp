import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Home.css";
import GridSearchBreedDogs from "../components/GridSearchBreedDogs";
import GridDogsHome from "../components/GridDogsHome";
import { getBreeds } from "../api/dogsApi";
import { newBreeds } from "../api/myApi";
import Button from "@mui/material/Button";
import NavBar1 from "../components/NavBar1";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
      <NavBar1 setDataBreeds={setDataBreeds} />
      {/* <NavBar
        setDataBreeds={setDataBreeds}
        handleShowBreeds={handleShowBreeds}
      />{" "} */}

      <GridSearchBreedDogs dataBreeds={dataBreeds} />
      <Grid container sx={{ margin: "100px" }}>
        <Box sx={{ backgroundColor: "grey" }}>HOLA</Box>
        <GridDogsHome
          dogs={dogs}
          breedToShow={breedToShow}
          allDogs={allDogs}
          newDogs={newDogs}
        />
      </Grid>
    </div>
  );
};

export default Home;
