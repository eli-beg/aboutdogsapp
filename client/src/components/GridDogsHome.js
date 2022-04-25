import React, { useEffect, useState } from "react";
import CardBreedDog from "./CardBreedDog";

const GridDogsHome = ({ dogs, breedToShow, allDogs, newDogs }) => {
  const [dogsToShow, setDogsToShow] = useState();
  console.log("hola", allDogs);

  useEffect(() => {
    if (breedToShow === "allbreeds") {
      setDogsToShow(allDogs);
    } else if (breedToShow === "breeds") {
      setDogsToShow(dogs);
    } else if (breedToShow === "newbreeds") {
      setDogsToShow(newDogs);
    }
  }, [breedToShow, allDogs]);

  return (
    <div>
      {dogsToShow &&
        dogsToShow.map((newDogToShow) => (
          <CardBreedDog key={newDogToShow.id} dataBreed={newDogToShow} />
        ))}
    </div>
  );
};

export default GridDogsHome;
