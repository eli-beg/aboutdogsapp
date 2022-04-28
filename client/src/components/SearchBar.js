import React, { useState } from "react";
import { onSearch } from "../api/dogsApi";
import { Button, TextField } from "@mui/material";

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
      <form id="myform" onSubmit={handleSubmit}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Search breeds..."
          value={dogBreed}
          onChange={handleChange}
          variant="filled"
          size="small"
          sx={{ backgroundColor: "white", borderRadius: "5px" }}
        />
        <Button
          variant="contained"
          type="submit"
          form="myform"
          sx={{ backgroundColor: "394557" }}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
