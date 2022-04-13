import React, { useState } from "react";
import { onSearch } from "../api/dogsApi";

const SearchBar = () => {
  const [dogBreed, setDogBreed] = useState("");
  const [dataBreeds, setDataBreeds] = useState(null);

  const handleChange = (e) => {
    e.defaultPrevented = true;

    setDogBreed(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dogs = [];
    onSearch(dogBreed).then((r) => dogs.push(r));

    setDataBreeds(dogs);
    setDogBreed("");
  };
  console.log(dataBreeds);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="PlaceHolderStyle"
          type="text"
          placeholder="Search breeds..."
          value={dogBreed}
          onChange={handleChange}
        />

        <button type="submit"> search</button>
      </form>
    </div>
  );
};

export default SearchBar;
