"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      Product.belongsTo(models.Section, {
        as: "section",
        foreignKey: "sectionId",
      });

      Product.belongsToMany(models.Ingredient, {
        through: "ProductIngredients",
        foreignKey: "productId",
        otherKey: "ingredientId",
        as: "ingredients",
      });
    }
  }

  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      pieces: DataTypes.INTEGER,
      description: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      sectionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
