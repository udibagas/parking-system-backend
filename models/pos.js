"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pos extends Model {
    static associate(models) {
      this.belongsTo(models.Printer, {
        foreignKey: "printer_id",
        as: "printer",
      });
    }
  }

  Pos.init(
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
          isIP: { msg: "Invalid IP Address" },
        },
      },
      printer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pos",
      timestamps: false,
      defaultScope: {
        include: "printer",
      },
      scopes: {
        active: {
          where: { status: true },
        },
      },
    }
  );

  return Pos;
};
