const { Router, request, response } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Dog } = require('../db');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let arrayperros = [];

axios
  .get('https://api.thedogapi.com/v1/breeds?limit=8')
  .then((response) => {
    const array = response.data;
    console.log(response.data);
    const listadodedogs = array.map((element) => element.name);
    console.log('hola', listadodedogs);
    arrayperros = listadodedogs;
  })
  .catch((error) => {
    console.log(error);
  });

router.get('/dogs', (req, res) => {
  res.send(arrayperros);
});
router.post('/breeds/add', async (req, res) => {
  const { name, life_span } = req.body;

  const breedCreated = await Dog.findOrCreate({
    where: { name: name, life_span: life_span }
  });
  console.log('holis', breedCreated);
  // res.send(breedCreated);
  return res.send(breedCreated);
});

module.exports = router;
