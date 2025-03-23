'use strict';

const { update } = require('../../../controllers/productsControllers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria', [
      {
      nombre:"niguiris",
      createdAt: new Date(),
      updatedAt: new Date()


    }, {
      nombre:"roll",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('categorias', null, {});
       }
};
