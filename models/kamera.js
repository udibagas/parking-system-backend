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
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      snapshot_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Snapshot URL harus diisi" },
          notEmpty: { msg: "Snapshot URL harus diisi" },
          isUrl: { msg: "URL tidak valid" },
        },
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      auth_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Auth type harus diisi" },
          notEmpty: { msg: "Auth type harus diisi" },
          validAuth: (value) => {
            if (!["basic", "digest"].includes(value)) {
              throw new Error("Invalid auth type");
            }
          },
        },
      },
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
