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
      nama: DataTypes.STRING,
      shortcut_key: DataTypes.STRING,
      tarif_flat: DataTypes.INTEGER,
      denda_ticket_hilang: DataTypes.INTEGER,
      is_default: DataTypes.BOOLEAN,
      mode_tarif: DataTypes.INTEGER,
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
