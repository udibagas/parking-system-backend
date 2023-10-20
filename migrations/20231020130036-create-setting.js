"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Settings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jml_kendaraan_per_kartu: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      masa_aktif_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 30,
      },
      nama_lokasi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat_lokasi: {
        type: Sequelize.STRING,
      },
      info_tambahan_tiket: {
        type: Sequelize.STRING,
      },
      plat_nomor_default: {
        type: "CHAR(2)",
      },
      must_checkout: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      member_auto_open: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      disable_plat_nomor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      hapus_snapshot_dalam_hari: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 30,
      },
      hapus_transaksi_dalam_hari: {
        type: Sequelize.INTEGER,
      },
      orientasi_kamera: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_pelanggan: {
        type: Sequelize.STRING,
      },
      server_address: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Settings");
  },
};
