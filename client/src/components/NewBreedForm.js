import React, { useState } from "react";
import { newBreedPost } from "../api/dogsApi";

const NewBreedForm = () => {
  const newBreedInitialValues = {
    name: "",
    life_span: "",
    temperament: "",
  };

  const [newBreed, setNewBreed] = useState(newBreedInitialValues);

  const handleNewBreedChange = (e) => {
    e.preventDefault();
    setNewBreed({
      ...newBreed,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newBreedPost(newBreed);
    setNewBreed(newBreedInitialValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input type="text" name="name" onChange={handleNewBreedChange} />
        </div>
        <div>
          Life Span:
          <input type="text" name="life_span" onChange={handleNewBreedChange} />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default NewBreedForm;
