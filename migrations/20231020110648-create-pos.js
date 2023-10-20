"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      ip_address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      printer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Printers",
        },
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pos");
  },
};
