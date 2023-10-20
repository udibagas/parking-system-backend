"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AreaParkirs", {
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
      keterangan: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      jenis_kendaraan: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      kapasitas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      terisi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AreaParkirs");
  },
};
