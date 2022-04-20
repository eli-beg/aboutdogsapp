import react from "react";
import CardBreedDog from "./CardBreedDog";

const GridDogsHome = ({ dogs }) => {
  return (
    <div>
      <div>
        {dogs &&
          dogs.map((dog) => <CardBreedDog key={dog.id} dataBreed={dog} />)}
      </div>
    </div>
  );
};

export default GridDogsHome;
