'use strict';

/**@type {import('sequelize-cli').Migration} */

const data = [
  {
    productId : 1,
    ingredientId : 1
  },
  {
    productId : 1,
    ingredientId : 2
  },
  {
    productId : 1,
    ingredientId : 3
  },
  {
    productId : 2,
    ingredientId : 5
  },
  {
    productId : 2,
    ingredientId : 4
  },
  {
    productId : 2,
    ingredientId : 1
  },
  {
    productId : 3,
    ingredientId : 5
  },
  {
    productId : 3,
    ingredientId : 1
  },
  {
    productId : 3,
    ingredientId : 4
  },
  {
    productId : 3,
    ingredientId : 2
  },
  {
    productId : 4,
    ingredientId : 5
  },
  {
    productId : 4,
    ingredientId : 2
  },
  {
    productId : 4,
    ingredientId : 1
  },
  {
    productId : 5,
    ingredientId : 5
  },
  {
    productId : 5,
    ingredientId : 6
  },
  {
    productId : 5,
    ingredientId : 2
  },
  {
    productId : 5,
    ingredientId : 4
  },
  {
    productId : 6,
    ingredientId : 5
  },
  {
    productId : 6,
    ingredientId : 1
  },
  {
    productId : 6,
    ingredientId : 7
  },
  {
    productId : 7,
    ingredientId : 5
  },
  {
    productId : 7,
    ingredientId : 8
  },
  {
    productId : 7,
    ingredientId : 9
  },
  {
    productId : 7,
    ingredientId : 10
  },
  {
    productId : 8,
    ingredientId : 5
  },
  {
    productId : 8,
    ingredientId : 2
  },
  {
    productId : 8,
    ingredientId : 1
  },
  {
    productId : 8,
    ingredientId : 11
  },
  {
    productId : 9,
    ingredientId : 5
  },
  {
    productId : 9,
    ingredientId : 12
  },
  {
    productId : 10,
    ingredientId : 5
  },
  {
    productId : 10,
    ingredientId : 8
  },
  {
    productId : 11,
    ingredientId : 1
  },
]

const ingredients_products = data.map(({productId, ingredientId}) => {
  return {
    productId,
    ingredientId,
    createdAt : new Date,
    updatedAt : new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductIngredients', ingredients_products, {});
    
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('ProductIngredients', null, {});
     
  }
};
