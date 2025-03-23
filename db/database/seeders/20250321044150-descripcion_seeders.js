'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('descripcions', [
     {
      nombre:"queso,langostino",
      createdAt: new Date(),
      updatedAt: new Date()
   
    },
     {
      nombre:"palta,queso,salmon",
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    nombre:"palta,salmon",
    createdAt: new Date(),
    updatedAt: new Date()
 },
 {
  
  nombre:"queso,palta,cangrejo",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  nombre:"tamago,queso,salmon",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  nombre:"arroz,tapa de salmon",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  
  nombre:"arroz,tapa de pulpo",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  nombre:"arroz,tapa de langostino",
  createdAt: new Date(),
  updatedAt: new Date()
},
{
nombre:"Salmon cocido con batata arriba",
  createdAt: new Date(),
  updatedAt: new Date()
}
,
{
nombre:"Salmon , queso philadelphia",
  createdAt: new Date(),
  updatedAt: new Date()
}]);
   
 },

 async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('descripcion', null, {});
    
 }
};

