"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JenisKendaraans", {
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
        allowNull: false,
        unique: true,
      },
      tarif_flat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      denda_ticket_hilang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_default: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      mode_tarif: {
        type: "TINYINT",
        allowNull: false,
        defaultValue: 0,
      },
      menit_pertama: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tarif_menit_pertama: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      menit_selanjutnya: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tarif_menit_selanjutnya: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tarif_maksimum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tarif_menginap: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      group: {
        type: Sequelize.STRING,
      },
      last_sync: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JenisKendaraans");
  },
};
