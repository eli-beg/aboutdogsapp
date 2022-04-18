import React, { useState } from "react";
import ModalNewBreedForm from "./ModalNewBreedForm";
import SearchBar from "./SearchBar";

const NavBar = ({ setDataBreeds }) => {
  const [openModalNewBreedForm, setOpenModalNewBreedForm] = useState(false);

  const openModal = () => {
    setOpenModalNewBreedForm(true);
  };

  return (
    <div>
      <h1>soy la navbarr</h1>
      <div>
        <SearchBar setDataBreeds={setDataBreeds} />
      </div>
      <div>
        <input type="checkbox" name="breeds" />
        <label>Original Breeds</label>
      </div>
      <div>
        <input type="checkbox" name="newbreeds" />
        <label>New Breeds</label>
      </div>
      <div>
        <input type="checkbox" name="allbreeds" />
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

  // aca tiene que ir el boton que me abra un modal con un formulario para cargar nuevas razas de perros
};

export default NavBar;
