"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MemberVehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Member, { foreignKey: "member_id", as: "member" });
    }
  }
  MemberVehicle.init(
    {
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Member harus diisi" },
          notEmpty: { msg: "Member harus diisi" },
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
      plat_nomor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Plat nomor harus diisi" },
          notEmpty: { msg: "Plat nomor harus diisi" },
        },
      },
      merk: DataTypes.STRING,
      tipe: DataTypes.STRING,
      tahun: DataTypes.INTEGER,
      warna: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MemberVehicle",
      timestamps: false,
    }
  );
  return MemberVehicle;
};
