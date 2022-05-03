import React, { useEffect, useState } from "react";
import "./Home.css";
import GridDogsHome from "../components/GridDogsHome";
import { getBreeds } from "../api/dogsApi";
import { newBreeds } from "../api/myApi";
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
      <NavBar1 setDataBreeds={setDataBreeds} setBreedToShow={setBreedToShow} />
      {/* <NavBar
        setDataBreeds={setDataBreeds}
        handleShowBreeds={handleShowBreeds}
      />{" "} */}

      <Grid container sx={{ marginTop: "100px" }}>
        <Grid item container xs={6} sm={4} md={3}>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              backgroundColor: "primary.main",
            }}
          >
            HOLA
          </Box>
        </Grid>
        <Grid item container xs={6} sm={2} md={9}>
          <GridDogsHome
            dataBreeds={dataBreeds}
            dogs={dogs}
            breedToShow={breedToShow}
            allDogs={allDogs}
            newDogs={newDogs}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
