import React, { useState } from "react";
import { onSearch } from "../api/dogsApi";

const SearchBar = ({ setDataBreeds }) => {
  const [dogBreed, setDogBreed] = useState("");

  const handleChange = (e) => {
    e.defaultPrevented = true;

    setDogBreed(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(dogBreed).then((r) => setDataBreeds(r));
    setDogBreed("");
  };

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
