'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  seccion.init({
    nombre: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'seccion',
  });
  return seccion;
};