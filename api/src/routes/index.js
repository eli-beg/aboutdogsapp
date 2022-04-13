const { Router, request, response } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let arrayperros = [];

axios
  .get("https://api.thedogapi.com/v1/breeds?limit=8")
  .then((response) => {
    const array = response.data;
    console.log(response.data);
    const listadodedogs = array.map((element) => element.name);
    console.log("hola", listadodedogs);
    arrayperros = listadodedogs;
  })
  .catch((error) => {
    console.log(error);
  });

router.get("/dogs", (req, res) => {
  res.send(arrayperros);
});
module.exports = router;
