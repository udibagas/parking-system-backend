"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class GateIn extends Model {
    static associate(models) {
      this.belongsTo(models.Printer, { foreignKey: "printer_id" });
    }

    get kamera_list() {
      return (async () => {
        return await sequelize.models.Kamera.findAll({
          where: { id: { [Op.in]: this.kamera } },
        });
      })();
    }
  }

  GateIn.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      jenis_kendaraan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Jenis kendaraan harus diisi" },
          notEmpty: { msg: "Jenis kendaraan harus diisi" },
        },
      },
      controller_ip_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "IP Address controller harus diisi" },
          notEmpty: { msg: "IP Address controller harus diisi" },
        },
      },
      controller_port: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Port controller harus diisi" },
          notEmpty: { msg: "Port controller harus diisi" },
        },
      },
      status: DataTypes.BOOLEAN,
      shortcut_key: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Shortcut key harus diisi" },
          notEmpty: { msg: "Shortcut key harus diisi" },
          len: { args: 1, msg: "Shortcut harus 1 karakter" },
        },
      },
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
