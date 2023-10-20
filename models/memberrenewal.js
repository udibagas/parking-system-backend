'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberRenewal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MemberRenewal.init({
    member_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    dari_tanggal: DataTypes.DATE,
    sampai_tanggal: DataTypes.DATE,
    jumlah: DataTypes.INTEGER,
    siklus_pembayaran_unit: DataTypes.STRING,
    siklus_pembayaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MemberRenewal',
  });
  return MemberRenewal;
};