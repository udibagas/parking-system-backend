"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static searchable = ["email", "name"];

    static filterable = ["role", "status"];

    static associate(models) {}

    toJSON() {
      const values = this.get();
      delete values.password;
      return values;
    }
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
      email: { type: DataTypes.STRING },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password harus diisi" },
          notEmpty: { msg: "Password harus diisi" },
          min: { args: 6, msg: "Panjang password minimal 6 karakter" },
        },
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Role harus diisi" },
          notEmpty: { msg: "Role harus diisi" },
          isIn: {
            args: [[0, 1]],
            msg: "Invalid role",
          },
        },
      },

      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: "Status harus diisi" },
          notEmpty: { msg: "Status harus diisi" },
        },
      },
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

    user.email = new Date().getTime() + "@mail.com";
  });

  return User;
};
