"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class GateOut extends Model {
    static associate(models) {
      this.belongsTo(models.Pos, { foreignKey: "pos_id" });
    }

    async getKameraList() {
      return await sequelize.models.Kamera.findAll({
        where: { id: { [Op.in]: this.kamera } },
      });
    }
  }

  GateOut.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      shortcut_key: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Shortcut key harus diisi" },
          notEmpty: { msg: "Shortcut key harus diisi" },
          len: { args: 1, msg: "Shortcut harus 1 karakter" },
        },
      },
      jenis_kendaraan: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          notNull: { msg: "Jenis kendaraan harus diisi" },
          notEmpty: { msg: "Jenis kendaraan harus diisi" },
        },
      },
      device: DataTypes.STRING,
      baudrate: DataTypes.INTEGER,
      open_command: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Perintah buka harus diisi" },
          notEmpty: { msg: "Perintah buka harus diisi" },
        },
      },
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
