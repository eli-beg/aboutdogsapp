import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import GridDogsHome from "../components/GridDogsHome";
import { getBreeds } from "../api/dogsApi";
import { newBreeds } from "../api/myApi";
import NavBar1 from "../components/NavBar1";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccordionFilters from "../components/Accordion";
import { allTemperaments } from "../api/myApi";

const Home = () => {
  const [dataBreeds, setDataBreeds] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [newDogs, setNewDogs] = useState(null);
  const [breedToShow, setBreedToShow] = useState("breeds");
  const [temperamentsNames, setTemperamentsNames] = useState([]);
  const [checked, setChecked] = useState("");

  useEffect(() => {
    getBreeds().then((r) => setDogs(r));
  }, []);

  const handleCheckboxChange = (e) => {
    let value = e.target.value;
    setBreedToShow(value);
    setChecked(e.target.value);
  };

  useEffect(() => {
    newBreeds().then((r) => {
      const newBreedsData = r.data;
      const newDogsData = newBreedsData.map((b) => ({
        ...b,
        temperament: b.temperaments.map((t) => t.name).join(", "),
      }));

      setNewDogs(newDogsData);
    });
  }, []);

  let allDogs = [];
  if (dogs && newDogs) {
    allDogs = dogs.concat(newDogs);
  }

  const isMountedRef = useRef(true);

  useEffect(() => {
    allTemperaments().then((r) => {
      if (isMountedRef.current) {
        const newTemperaments = r.data.sort((a, b) => a.name > b.name);
        setTemperamentsNames(newTemperaments);
      }
    });

    return () => {
      isMountedRef.current = false;
    };
  }, [isMountedRef]);

  return (
    <div className="NavBarStyle">
      <NavBar1 setDataBreeds={setDataBreeds} setBreedToShow={setBreedToShow} />
      <Grid container sx={{ marginTop: "100px" }}>
        <Grid item container xs={6} sm={4} md={3}>
          <Box sx={{ width: "100%" }}>
            <AccordionFilters
              handleCheckboxChange={handleCheckboxChange}
              checked={checked}
              temperamentsNames={temperamentsNames}
            />
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
