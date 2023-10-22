"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MemberRenewal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
      this.belongsTo(models.Member, { foreignKey: "member_id", as: "member" });
    }

    toJSON() {
      const values = this.get();
      return {
        ...values,
        nama_member: values.member.nama,
        nomor_kartu: values.member.nomor_kartu,
        operator: values.user?.name,
      };
    }
  }
  MemberRenewal.init(
    {
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Member harus diisi" },
          notEmpty: { msg: "Member harus diisi" },
        },
      },
      user_id: DataTypes.INTEGER,
      dari_tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Dari tanggal harus diisi" },
          notEmpty: { msg: "Dari tanggal harus diisi" },
          isDate: { msg: "Invalid date format" },
        },
      },
      sampai_tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Sampai tanggal harus diisi" },
          notEmpty: { msg: "Sampai tanggal harus diisi" },
          isDate: { msg: "Invalid date format" },
        },
      },
      jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Sampai tanggal harus diisi" },
          notEmpty: { msg: "Sampai tanggal harus diisi" },
          isNumeric: { msg: "Jumlah harus berupa angka" },
        },
      },
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
      siklus_pembayaran: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Siklus pembayaran harus diisi" },
          notEmpty: { msg: "Siklus pembayaran harus diisi" },
          isNumeric: { msg: "Siklus pembayaran harus berupa angka" },
        },
      },
    },
    {
      sequelize,
      modelName: "MemberRenewal",
      defaultScope: {
        include: ["user", "member"],
      },
    }
  );

  return MemberRenewal;
};
