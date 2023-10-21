"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AreaParkir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AreaParkir.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      keterangan: DataTypes.STRING,
      jenis_kendaraan: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          notNull: { msg: "Jenis kendaraan harus diisi" },
          notEmpty: { msg: "Jenis kendaraan harus diisi" },
        },
      },
      kapasitas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Kapasitas harus diisi" },
          notEmpty: { msg: "Kapasitas harus diisi" },
        },
      },
      terisi: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AreaParkir",
      timestamps: false,
    }
  );
  return AreaParkir;
};
