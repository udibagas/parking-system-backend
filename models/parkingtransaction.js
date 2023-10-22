"use strict";
const { Model } = require("sequelize");
const { random } = require("../helpers/string");

module.exports = (sequelize, DataTypes) => {
  class ParkingTransaction extends Model {
    static associate(models) {
      this.belongsTo(models.Member, { foreignKey: "member_id", as: "member" });
      this.belongsTo(models.GateIn, {
        foreignKey: "gate_in_id",
        as: "gate_in",
      });

      this.belongsTo(models.GateOut, {
        foreignKey: "gate_out_id",
        as: "gate_out",
      });

      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });

      this.belongsTo(models.Shift, {
        foreignKey: "shift_id",
        as: "shift",
      });
    }
  }

  ParkingTransaction.init(
    {
      is_member: DataTypes.BOOLEAN,
      jenis_kendaraan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Jenis kendaraan harus diisi" },
          notEmpty: { msg: "Jenis kendaraan harus diisi" },
        },
      },
      gate_in_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Gate masuk harus diisi" },
          notEmpty: { msg: "Gate masuk harus diisi" },
        },
      },
      gate_out_id: DataTypes.INTEGER,
      time_in: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Waktu masuk harus diisi" },
          notEmpty: { msg: "Waktu masuk harus diisi" },
          isDate: { msg: "Format waktu masuk tidak valid" },
        },
      },
      time_out: DataTypes.DATE,
      nomor_barcode: DataTypes.STRING,
      nomor_kartu: DataTypes.STRING,
      note: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      member_id: DataTypes.INTEGER,
      plat_nomor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Plat nomor harus diisi" },
          notEmpty: { msg: "Plat nomor harus diisi" },
        },
      },
      tarif: DataTypes.INTEGER,
      operator: DataTypes.STRING,
      denda: DataTypes.INTEGER,
      edit: DataTypes.BOOLEAN,
      edit_by: DataTypes.STRING,
      manual: DataTypes.BOOLEAN,
      shift_id: DataTypes.INTEGER,
      group: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ParkingTransaction",
      defaultScope: {
        include: ["gate_in", "gate_out", "member", "shift", "user"],
      },
    }
  );

  ParkingTransaction.beforeCreate((instance) => {
    if (instance.manual) {
      instance.nomor_barcode = random();
      instance.is_member = false;
    }
  });

  return ParkingTransaction;
};
