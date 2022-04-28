import React, { useState } from "react";
import ModalNewBreedForm from "./ModalNewBreedForm";
import SearchBar from "./SearchBar";

const NavBar = ({ setDataBreeds, handleShowBreeds }) => {
  const [openModalNewBreedForm, setOpenModalNewBreedForm] = useState(false);

  const openModal = () => {
    setOpenModalNewBreedForm(true);
  };

  return (
    <div>
      <div>
        <SearchBar setDataBreeds={setDataBreeds} />
      </div>
      <div>
        <input onClick={handleShowBreeds} type="checkbox" name="breeds" />
        <label>Original Breeds</label>
      </div>
      <div>
        <input onClick={handleShowBreeds} type="checkbox" name="newbreeds" />
        <label>New Breeds</label>
      </div>
      <div>
        <input onClick={handleShowBreeds} type="checkbox" name="allbreeds" />
        <label>All </label>
      </div>
      <div>
        <button type="button" onClick={(e) => openModal()} value="false">
          Add a new Breed!
        </button>
      </div>
      <div>{openModalNewBreedForm ? <ModalNewBreedForm /> : null}</div>
    </div>
  );
};

export default NavBar;
