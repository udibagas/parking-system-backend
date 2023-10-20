"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GateIn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GateIn.init(
    {
      nama: DataTypes.STRING,
      jenis_kendaraan: DataTypes.STRING,
      controller_ip_address: DataTypes.STRING,
      controller_port: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      shortcut_key: DataTypes.STRING,
      kamera: DataTypes.JSON,
      printer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GateIn",
      timestamps: false,
    }
  );
  return GateIn;
};
