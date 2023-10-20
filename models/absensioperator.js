"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AbsensiOperator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AbsensiOperator.init(
    {
      user_id: DataTypes.INTEGER,
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
