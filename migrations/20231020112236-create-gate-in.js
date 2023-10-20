"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("GateIns", {
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
      jenis_kendaraan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      controller_ip_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      controller_port: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      shortcut_key: {
        type: "CHAR(1)",
        allowNull: false,
        unique: true,
      },
      kamera: {
        type: Sequelize.JSON,
        allowNull: true,
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
    await queryInterface.dropTable("GateIns");
  },
};
