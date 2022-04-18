import React, { useEffect, useState } from "react";
import { onSearchImage } from "../api/dogsApi";

const CardBreedDog = ({ dataBreed }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (dataBreed && dataBreed.reference_image_id) {
      onSearchImage(dataBreed.reference_image_id).then((r) => setImgUrl(r.url));
    }
  }, [dataBreed]);
  console.log("hola", dataBreed);

  return (
    <div>
      <div>{dataBreed.name}</div>
      <img src={imgUrl} alt="img not found" />
      <div>TEMPERAMENT : {dataBreed.temperament} </div>
    </div>
  );
};

export default CardBreedDog;
