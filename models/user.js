"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static searchable = ["email", "name"];

    static filterable = ["role", "status"];

    static associate(models) {}
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama harus diisi" },
          notEmpty: { msg: "Nama harus diisi" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Email harus diisi" },
          notEmpty: { msg: "Email harus diisi" },
          isEmail: { msg: "Email tidak valid" },
        },
      },
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    }
  );

  User.beforeSave((user) => {
    if (user.password) {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
    }
  });

  return User;
};
