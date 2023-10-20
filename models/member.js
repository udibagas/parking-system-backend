'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init({
    nama: DataTypes.STRING,
    nomor_kartu: DataTypes.STRING,
    card_type: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    expiry_date: DataTypes.DATE,
    balance: DataTypes.INTEGER,
    last_transaction: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    group_member_id: DataTypes.INTEGER,
    berbayar: DataTypes.BOOLEAN,
    siklus_pembayaran_unit: DataTypes.STRING,
    register_date: DataTypes.DATE,
    siklus_pembayaran: DataTypes.INTEGER,
    tarif: DataTypes.INTEGER,
    last_in: DataTypes.DATE,
    last_out: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};