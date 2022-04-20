const { Router, request, response } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Dog } = require('../db');
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

  const breedCreated = await Dog.findOrCreate({
    where: { name: name, life_span: life_span }
  });

  return res.send(breedCreated);
});

let arrayTemperaments = [];
let finalArrayTemperaments = [];
axios
  .get('https://api.thedogapi.com/v1/breeds?limit=100')
  .then((response) => {
    const array = response.data;
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
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = router;
