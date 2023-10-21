"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Kamera extends Model {
    static searchable = ["name"];

    static filterable = ["status"];

    static defaultSort = "nama";

    static associate(models) {
      // define association here
    }
  }

  Kamera.init(
    {
      nama: DataTypes.STRING,
      snapshot_url: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      auth_type: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Kamera",
      timestamps: false,
    }
  );

  return Kamera;
};
