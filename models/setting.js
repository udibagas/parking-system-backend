'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setting.init({
    jml_kendaraan_per_kartu: DataTypes.INTEGER,
    masa_aktif_member: DataTypes.INTEGER,
    nama_lokasi: DataTypes.STRING,
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
    server_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Setting',
  });
  return Setting;
};