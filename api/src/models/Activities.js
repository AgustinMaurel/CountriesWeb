const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activitie', {
    name: {
      type: DataTypes.STRING,
    },
    id :{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    dificult:{
      type: DataTypes.ENUM("1","2","3","4","5")
    },
    duration:{
      type:DataTypes.STRING
    },
    season:{
      type: DataTypes.ENUM('Autumn','Winter','Spring','Summer')
    },
    image:{
      type: DataTypes.STRING
    }
  });
};
