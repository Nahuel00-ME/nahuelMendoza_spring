'use strict';
const productsJson = require('../../sushi.json');
const images = productsJson.map(({id, imagen}) => {
  return {
    name : imagen,
    productId: id,
    createdAt : new Date,
    updatedAt : new Date
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('images', images,{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
   
  }
};
