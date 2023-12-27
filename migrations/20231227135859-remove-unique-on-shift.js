"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Shifts", "nama");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Shifts", {
      type: "unique",
      fields: ["nama"],
    });
  },
};
