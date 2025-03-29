'use strict';

/**@type {import('sequelize-cli').Migration} */
const path = require("path");
const directory = path.join(__dirname, "../../users.json");
const { readFile, parseFile } = require("../../../util/fileSystem");
const users = parseFile(readFile(directory));


users.map((user) => {
  user.createdAt = new Date();
  user.updatedAt = new Date();
});

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', users, {});
    
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
