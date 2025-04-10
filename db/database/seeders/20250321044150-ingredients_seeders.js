'use strict';
const ingredientes = [
  {
    id : 1,
    name : "Salmón"
  },
  {
    id : 2,
    name : "Queso"
  },
  {
    id : 3,
    name : "Huevo"
  },
  {
    id : 4,
    name : "Palta"
  },
  {
    id : 5,
    name : "Arroz"
  },
  {
    id : 6,
    name : "Kanikama"
  },
  {
    id : 7,
    name : "Batata"
  },
  {
    id : 8,
    name : "Langostino"
  },
  {
    id : 9,
    name : "Miel"
  },
  {
    id : 10,
    name : "Mostaza"
  },
  {
    id : 11,
    name : "Alga Nori"
  },
  {
    id : 12,
    name : "Pulpo"
  },
]

const ingredients = ingredientes.map(({name}) => {
  return {
    name,
    createdAt : new Date,
    updatedAt : new Date
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ingredients', ingredients);
   
 },

 async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredients', null, {});
    
 }
};

