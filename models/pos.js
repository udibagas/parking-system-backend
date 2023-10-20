"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pos.init(
    {
      nama: DataTypes.STRING,
      ip_address: DataTypes.STRING,
      printer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pos",
      timestamps: false,
    }
  );
  return Pos;
};
