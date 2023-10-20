"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MemberVehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MemberVehicle.init(
    {
      member_id: DataTypes.INTEGER,
      jenis_kendaraan: DataTypes.STRING,
      plat_nomor: DataTypes.STRING,
      merk: DataTypes.STRING,
      tipe: DataTypes.STRING,
      tahun: DataTypes.INTEGER,
      warna: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MemberVehicle",
      timestamps: false,
    }
  );
  return MemberVehicle;
};
