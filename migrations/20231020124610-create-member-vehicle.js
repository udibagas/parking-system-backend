"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MemberVehicles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      member_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Members",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      jenis_kendaraan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plat_nomor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      merk: {
        type: Sequelize.STRING,
      },
      tipe: {
        type: Sequelize.STRING,
      },
      tahun: {
        type: Sequelize.INTEGER,
      },
      warna: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MemberVehicles");
  },
};
