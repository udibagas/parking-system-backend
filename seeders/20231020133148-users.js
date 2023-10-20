"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "udibagas",
        email: "udibagas@gmail.com",
        password: "bismillah",
        role: 1,
      },
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "bismillah",
        role: 1,
      },
      {
        name: "operator",
        email: "operator@gmail.com",
        password: "bismillah",
        role: 0,
      },
      {
        name: "putri",
        email: "putri@gmail.com",
        password: "bismillah",
        role: 0,
      },
      {
        name: "yasmin",
        email: "yasmin@gmail.com",
        password: "bismillah",
        role: 0,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
