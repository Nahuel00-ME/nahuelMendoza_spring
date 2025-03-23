'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) 
  {
    await queryInterface.bulkInsert('products', [
      {
        nombre: "roll tamago",
        precio: 500,
        piezas: 8,
        descripcionId: 5,
        categoriaId: 2,
        seccionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        nombre: "Roll New York",
        precio: 700,
        piezas: 10,
        descripcionId: 3,
        categoriaId: 2,
        seccionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "roll New york Phila",
        precio: 1450,
        piezas: 10,
        descripcionId: 2,
        categoriaId: 2,
        seccionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "roll philadelphia",
        precio: 450,
        piezas: 10,
        descripcionId: 9,
        categoriaId: 2,
        seccionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Roll california",
        precio: 450,
        piezas: 10,
        descripcionId: 3,
        categoriaId: 2,
        seccionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Roll teki",
        precio: 1400,
        piezas: 8,
        descripcionId: 8,
        categoriaId: 2,
        seccionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "roll futurama",
        precio: 600,
        piezas: 10,
        descripcionId: 1,
        categoriaId: 2,
        seccionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "maki Salmon",
        precio: 1600,
        piezas: 10,
        descripcionId: 2,
        categoriaId: 2,
        seccionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "niguiri pulpo",
        precio: 600,
        piezas: 5,
        descripcionId: 6,
        categoriaId: 1,
        seccionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "niguiri langostino ",
        precio: 1200,
        piezas: 5,
        descripcionId:7 ,
        categoriaId: 1,
        seccionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
      nombre: "niguiri salmon",
      precio: 1300,
      piezas: 5,
      descripcionId: 1,
      categoriaId: 1,
      seccionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])},
   async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});

   }}