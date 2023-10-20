"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GateOut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GateOut.init(
    {
      nama: DataTypes.STRING,
      shortcut_key: DataTypes.STRING,
      jenis_kendaraan: DataTypes.JSON,
      device: DataTypes.STRING,
      baudrate: DataTypes.INTEGER,
      open_command: DataTypes.STRING,
      close_command: DataTypes.STRING,
      kamera: DataTypes.JSON,
      pos_id: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      running_text_device: DataTypes.STRING,
      running_text_baudrate: DataTypes.INTEGER,
      uhf_reader_host: DataTypes.STRING,
      uhf_reader_port: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GateOut",
      timestamps: false,
    }
  );
  return GateOut;
};
