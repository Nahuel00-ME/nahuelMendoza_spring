'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.categoria, {
        as: "categoria",
        foreignKey: "categoriaId"
      });
      Product.belongsTo(models.descripcion, {
        as: "descripcion",
        foreignKey: "descripcionId"
      });
      Product.belongsTo(models.seccion, {
        as: "seccion",
        foreignKey: "seccionId"
      });
      Product.hasMany(models.imagen, {
        as: "images",
        foreignKey: "productsId"
      });
    }
  }

  Product.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    piezas: DataTypes.INTEGER,
    descripcionId: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER,
    seccionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};