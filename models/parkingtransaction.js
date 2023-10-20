'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParkingTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ParkingTransaction.init({
    is_member: DataTypes.BOOLEAN,
    jenis_kendaraan: DataTypes.STRING,
    gate_in_id: DataTypes.INTEGER,
    gate_out_id: DataTypes.INTEGER,
    time_in: DataTypes.DATE,
    time_out: DataTypes.DATE,
    nomor_barcode: DataTypes.STRING,
    nomor_kartu: DataTypes.STRING,
    note: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    plat_nomor: DataTypes.STRING,
    tarif: DataTypes.INTEGER,
    operator: DataTypes.STRING,
    denda: DataTypes.INTEGER,
    edit: DataTypes.BOOLEAN,
    edit_by: DataTypes.STRING,
    manual: DataTypes.BOOLEAN,
    shift_id: DataTypes.INTEGER,
    group: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ParkingTransaction',
  });
  return ParkingTransaction;
};