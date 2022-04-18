import React from "react";
import CardBreedDog from "./CardBreedDog";

const GridBreedDogs = ({ dataBreeds }) => {
  return (
    <div className="GridBreedDogs">
      {dataBreeds &&
        dataBreeds.map((dataBreed) => (
          <CardBreedDog key={dataBreed.id} dataBreed={dataBreed} />
        ))}
    </div>
  );
};

export default GridBreedDogs;
