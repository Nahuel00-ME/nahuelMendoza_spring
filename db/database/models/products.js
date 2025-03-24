'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.categoria, {
        as: "categoria",
        foreignKey: "categoriaId"
      });
      products.belongsTo(models.descripcion, {
        as: "descripcion",
        foreignKey: "descripcionId"
      });
      products.belongsTo(models.seccion, {
        as: "seccion",
        foreignKey: "seccionId"
      });
      products.hasMany(models.imagen, {
        as: "images",
        foreignKey: "productssId"
      });
    }
    }
  
  products.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    piezas: DataTypes.INTEGER,
    descripcionId: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER,
    seccionId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};