'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('seccions', [
      {
        nombre:"salmon",
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
      nombre:"langostino",
      createdAt: new Date(),
      updatedAt: new Date()
   },{
    nombre:"cangrejo",
    createdAt: new Date(),
    updatedAt: new Date()
 },{
  nombre:"pulpo",
  createdAt: new Date(),
  updatedAt: new Date()
}]);
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('seccion', null, {});
     
  }
};
