import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardBreedDog from "./CardBreedDog";

const GridDogsHome = ({ dogs, breedToShow, allDogs, newDogs, dataBreeds }) => {
  const [dogsToShow, setDogsToShow] = useState();

  useEffect(() => {
    if (breedToShow === "allbreeds") {
      setDogsToShow(allDogs);
    } else if (breedToShow === "breeds") {
      setDogsToShow(dogs);
    } else if (breedToShow === "newbreeds") {
      setDogsToShow(newDogs);
    }
  }, [breedToShow, allDogs]);

  useEffect(() => {
    if (dataBreeds) {
      setDogsToShow(dataBreeds);
    }
  }, [dataBreeds]);

  return (
    <div>
      <Grid
        container
        rowSpacing={4}
        sx={{
          marginLeft: "0px",
          marginTop: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {dogsToShow &&
          dogsToShow.map((newDogToShow) => (
            <CardBreedDog key={newDogToShow.id} dataBreed={newDogToShow} />
          ))}
      </Grid>
    </div>
  );
};

export default GridDogsHome;
