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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "El nombre del producto no puede estar vacío"
          },
          len: {
            args: [3, 100],
            msg: "El nombre debe tener entre 3 y 100 caracteres"
          }
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "El precio debe ser un número entero"
          },
          min: {
            args: [0],
            msg: "El precio no puede ser negativo"
          }
        }
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: "La imagen debe ser una URL válida"
          }
        }
      },
      pieces: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "La cantidad debe ser un número entero"
          },
          min: {
            args: [0],
            msg: "La cantidad no puede ser negativa"
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 500],
            msg: "La descripción no puede exceder 500 caracteres"
          }
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sections',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
