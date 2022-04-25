const { Router, request, response } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Dog, Temperament } = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let arrayperros = [];

// axios
//   .get('https://api.thedogapi.com/v1/breeds?limit=8')
//   .then((response) => {
//     const array = response.data;
//     console.log(array);
//     const listadodedogs = array.map((element) => element.name);
//     arrayperros = listadodedogs;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

router.get('/dogs', (req, res) => {
  res.send(arrayperros);
});
router.post('/breeds/add', async (req, res) => {
  const { name, life_span } = req.body;
  // console.log('holu', req.body);
  const breedCreated = await Dog.findOrCreate({
    where: { name: name, life_span: life_span }
  });

  return res.send(breedCreated);
});
router.get('/breeds/newbreeds', async (req, res) => {
  const newBreeds = await Dog.findAll();

  if (!newBreeds) {
    res.status(404);
  }
  res.json(newBreeds);
});

router.post('/initialtemperaments', async (req, res) => {
  let arrayTemperaments = [];
  let finalArrayTemperaments = [];

  const initialTemperaments = async () => {
    try {
      const respuesta = await axios.get(
        'https://api.thedogapi.com/v1/breeds?limit=100'
      );
      const array = respuesta.data;
      arrayTemperaments = array.map((element) => element.temperament);

      const found = arrayTemperaments.map((e) => e.split(','));

      if (found) {
        const final = found.join().replace(/ /g, '').split(',');
        for (var i = 0; i < final.length; i++) {
          const newTemperament = finalArrayTemperaments.includes(final[i]);
          if (!newTemperament) {
            finalArrayTemperaments.push(final[i]);
          }
        }
        console.log('Holis2', finalArrayTemperaments);
      }
    } catch (error) {
      console.error(error);
    }
  };
  await initialTemperaments();
  const temperaments = finalArrayTemperaments.map(
    async (t) => await Temperament.create({ name: t })
  );
  await Promise.all(temperaments);
  return res.send('esta guardado!');
});

module.exports = router;
