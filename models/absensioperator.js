"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AbsensiOperator extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  AbsensiOperator.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User harus diisi" },
          notEmpty: { msg: "User harus diisi" },
        },
      },
      login: DataTypes.DATE,
      logout: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "AbsensiOperator",
      timestamps: false,
    }
  );
  return AbsensiOperator;
};
