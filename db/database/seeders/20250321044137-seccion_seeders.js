'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('sections', [
      {
        name:"Salmon",
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
      name:"Langostino",
      createdAt: new Date(),
      updatedAt: new Date()
   },{
    name:"Cangrejo",
    createdAt: new Date(),
    updatedAt: new Date()
 },{
  name:"Pulpo",
  createdAt: new Date(),
  updatedAt: new Date()
}]);
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('sections', null, {});
     
  }
};
