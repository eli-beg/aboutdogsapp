import axios from "axios";

export const newBreeds = async () => {
  return await axios.get(`http://localhost:3004/breeds/newbreeds`);
  //   try {
  //   } catch (error) {
  //     console.error(error);
  //   }
};
