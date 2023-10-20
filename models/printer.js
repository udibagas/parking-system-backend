"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Printer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Printer.init(
    {
      nama: DataTypes.STRING,
      ip_address: DataTypes.STRING,
      port: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Printer",
      timestamps: false,
    }
  );
  return Printer;
};
