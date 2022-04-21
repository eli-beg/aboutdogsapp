import React, { useEffect, useState } from "react";
import { newBreeds } from "../api/myApi";

import CardBreedDog from "./CardBreedDog";

const GridDogsHome = ({ dogs, breedToShow }) => {
  const [newDogs, setNewDogs] = useState(null);
  const [dogsToShow, setDogsToShow] = useState("");

  useEffect(() => {
    newBreeds().then((r) => {
      setNewDogs(r.data);
    });
  }, []);

  useEffect(() => {
    if (breedToShow === "breeds") {
      setDogsToShow(dogs);
    } else if (breedToShow === "newbreeds") {
      setDogsToShow(newDogs);
    }
  }, [breedToShow]);

  return (
    <div>
      <div>
        {dogs &&
          dogs.map((dog) => <CardBreedDog key={dog.id} dataBreed={dog} />)}
      </div>
      <div></div>
      <div>
        {newDogs &&
          newDogs.map((newDog) => (
            <CardBreedDog key={newDog.id} dataBreed={newDog} />
          ))}
      </div>
      {/* <div>
        {dogsToShow &&
          dogsToShow.map((newDogToShow) => (
            <CardBreedDog key={newDogToShow.id} dataBreed={newDogToShow} />
          ))}
      </div> */}
    </div>
  );
};

export default GridDogsHome;
