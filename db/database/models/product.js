'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.categoria, {
        as: "categoria",
        foreignKey: "categoriaId"
      });
      product.belongsTo(models.descripcion, {
        as: "descripcion",
        foreignKey: "descripcionId"
      });
      product.belongsTo(models.seccion, {
        as: "seccion",
        foreignKey: "seccionId"
      });
      product.hasMany(models.imagen, {
        as: "images",
        foreignKey: "productsId"
      });
    }
    }
  
  product.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    piezas: DataTypes.INTEGER,
    descripcionId: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER,
    seccionId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};