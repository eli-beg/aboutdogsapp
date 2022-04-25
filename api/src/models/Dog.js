const { DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize
    .define('dog', {
      id: {
        type: DataTypes.UUID,

        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      height: {
        type: DataTypes.STRING,
        allowNull: true
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: true
      },
      life_span: {
        type: DataTypes.STRING
      }
    })
    .beforeCreate((dog) => (dog.id = uuidv4()));
};
