import axios from "axios";

export const getBreeds = async () => {
  const data = await axios.get("https://api.thedogapi.com/v1/breeds");
  const arrDogsApi = data.data;

  const arrIndex = [];

  while (arrIndex.length < 50) {
    var j = Math.floor(Math.random() * arrDogsApi.length);

    const found = arrIndex.includes(j);
    if (!found) {
      arrIndex.push(j);
    }

    if (arrIndex.length === 50) {
      break;
    }
  }

  const newArray = [];

  for (var i = 0; i < arrIndex.length; i++) {
    const index = arrIndex[i];
    const found = arrDogsApi[index];
    newArray.push(found);
  }

  return newArray;
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

export const newBreedPost = async (newBreed) => {
  try {
    const respuesta = await axios.post(
      `http://localhost:3004/breeds/add`,
      newBreed
    );
    console.log("holu", respuesta);
  } catch (error) {
    console.error(error);
  }
};
