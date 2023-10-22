"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JenisKendaraan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JenisKendaraan.init(
    {
      nama: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      shortcut_key: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Shortcut key harus diisi" },
          notEmpty: { msg: "Shortcut key harus diisi" },
          len: { args: 1, msg: "Maksimum shortcut key 1 karakter" },
        },
      },
      tarif_flat: DataTypes.INTEGER,
      denda_ticket_hilang: DataTypes.INTEGER,
      is_default: DataTypes.BOOLEAN,
      mode_tarif: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Mode tarif harus diisi" },
          notEmpty: { msg: "Mode tarif harus diisi" },
        },
      },
      menit_pertama: DataTypes.INTEGER,
      tarif_menit_pertama: DataTypes.INTEGER,
      menit_selanjutnya: DataTypes.INTEGER,
      tarif_menit_selanjutnya: DataTypes.INTEGER,
      tarif_maksimum: DataTypes.INTEGER,
      tarif_menginap: DataTypes.INTEGER,
      group: DataTypes.STRING,
      last_sync: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "JenisKendaraan",
      timestamps: false,
    }
  );
  return JenisKendaraan;
};
