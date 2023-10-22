"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.MemberVehicle, {
        foreignKey: "member_id",
        as: "vehicles",
      });

      this.belongsTo(models.GroupMember, {
        foreignKey: "group_member_id",
        as: "group",
      });
    }
  }
  Member.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      nomor_kartu: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nomor kartu harus diisi" },
          notEmpty: { msg: "Nomor kartu harus diisi" },
        },
      },
      card_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Jenis kartu harus diisi" },
          notEmpty: { msg: "Jenis kartu harus diisi" },
        },
      },
      status: DataTypes.BOOLEAN,
      expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Tanggal kedaluarsa harus diisi" },
          notEmpty: { msg: "Tanggal kedaluarsa harus diisi" },
          isDate: { msg: "Invalid date format" },
        },
      },
      balance: DataTypes.INTEGER,
      last_transaction: DataTypes.DATE,
      email: DataTypes.STRING,
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nomor HP harus diisi" },
          notEmpty: { msg: "Nomor HP harus diisi" },
        },
      },
      group_member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Group harus diisi" },
          notEmpty: { msg: "Group harus diisi" },
        },
      },
      berbayar: DataTypes.BOOLEAN,
      siklus_pembayaran_unit: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Jenis kartu harus diisi" },
          notEmpty: { msg: "Jenis kartu harus diisi" },
          isIn: {
            args: [["days", "weeks", "months", "years"]],
            msg: "Invalid unit",
          },
        },
      },
      register_date: DataTypes.DATE,
      siklus_pembayaran: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Siklus pembayaran harus diisi" },
          notEmpty: { msg: "Siklus pembayaran harus diisi" },
          isNumeric: { msg: "Siklus pembayaran harus berupa angka" },
        },
      },
      tarif: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: { msg: "Tarif harus berupa angka" },
        },
      },
      last_in: DataTypes.DATE,
      last_out: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Member",
      defaultScope: {
        include: ["vehicles", "group"],
      },
    }
  );

  return Member;
};
