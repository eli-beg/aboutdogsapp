import axios from "axios";

export const getBreeds = async () => {
  return axios.get("https://api.thedogapi.com/v1/breeds?limit=8");
};

export const onSearch = async (dogBreed) => {
  try {
    const respuesta = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${dogBreed}`
    );

    return respuesta.data;
  } catch (error) {
    console.error(error);
  }
};

export const onSearchImage = async (imageId) => {
  try {
    const respuesta = await axios.get(
      `https://api.thedogapi.com/v1/images/${imageId}`
    );

    return respuesta.data;
  } catch (error) {
    console.error(error);
  }
};
