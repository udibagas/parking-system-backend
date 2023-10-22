"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Settings", [
      {
        nama_lokasi: "MITRATEKNIK",
        alamat_lokasi: "Semarang",
        info_tambahan_tiket: "JANGAN TINGGALKAN BARANG BAWAAN ANDA",
        jml_kendaraan_per_kartu: 1,
        hapus_snapshot_dalam_hari: 30,
        member_auto_open: 1,
        must_checkout: 0,
        plat_nomor_default: "H",
        orientasi_kamera: "LANDSCAPE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
