"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("GateOuts", {
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
      shortcut_key: {
        type: "CHAR(1)",
        allowNull: true,
      },
      jenis_kendaraan: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      device: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      baudrate: {
        type: Sequelize.INTEGER,
      },
      open_command: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      close_command: {
        type: Sequelize.STRING,
      },
      kamera: {
        type: Sequelize.JSON,
      },
      pos_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Pos",
        },
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      running_text_device: {
        type: Sequelize.STRING,
      },
      running_text_baudrate: {
        type: Sequelize.INTEGER,
      },
      uhf_reader_host: {
        type: Sequelize.STRING,
      },
      uhf_reader_port: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("GateOuts");
  },
};
