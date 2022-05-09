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
      lifeExpectancy: {
        type: DataTypes.STRING,
        allowNull: true
      },
      maximumHeight: {
        type: DataTypes.STRING,
        allowNull: true
      },
      maximumWeight: {
        type: DataTypes.STRING,
        allowNull: true
      },
      minimumHeight: {
        type: DataTypes.STRING,
        allowNull: true
      },
      maximumWeight: {
        type: DataTypes.STRING,
        allowNull: true
      },
      temperaments: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })
    .beforeCreate((dog) => (dog.id = uuidv4()));
};
