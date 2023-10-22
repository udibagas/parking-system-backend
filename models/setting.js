"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    static associate(models) {
      // define association here
    }
  }

  Setting.init(
    {
      jml_kendaraan_per_kartu: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Jumlah kendaraan per kartu harus diisi" },
          notEmpty: { msg: "Jumlah kendaraan per kartu harus diisi" },
        },
      },
      masa_aktif_member: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Masa aktif member harus diisi" },
          notEmpty: { msg: "Masa aktif member harus diisi" },
        },
      },
      nama_lokasi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama lokasi harus diisi" },
          notEmpty: { msg: "Nama lokasi harus diisi" },
        },
      },
      alamat_lokasi: DataTypes.STRING,
      info_tambahan_tiket: DataTypes.STRING,
      plat_nomor_default: DataTypes.STRING,
      must_checkout: DataTypes.BOOLEAN,
      member_auto_open: DataTypes.BOOLEAN,
      disable_plat_nomor: DataTypes.BOOLEAN,
      hapus_snapshot_dalam_hari: DataTypes.INTEGER,
      hapus_transaksi_dalam_hari: DataTypes.INTEGER,
      orientasi_kamera: DataTypes.STRING,
      id_pelanggan: DataTypes.STRING,
      server_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Setting",
    }
  );

  return Setting;
};
