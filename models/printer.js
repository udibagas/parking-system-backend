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
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      ip_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "IP Address harus diisi" },
          notEmpty: { msg: "IP Address harus diisi" },
        },
      },
      port: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Port harus diisi" },
          notEmpty: { msg: "Port harus diisi" },
          isNumeric: { msg: "Invalid port" },
        },
      },
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
