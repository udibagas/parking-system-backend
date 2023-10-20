"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AreaParkir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AreaParkir.init(
    {
      nama: DataTypes.STRING,
      keterangan: DataTypes.STRING,
      jenis_kendaraan: DataTypes.JSON,
      kapasitas: DataTypes.INTEGER,
      terisi: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AreaParkir",
      timestamps: false,
    }
  );
  return AreaParkir;
};
