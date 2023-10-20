"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Camera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Camera.init(
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
      modelName: "Camera",
      timestamps: false,
    }
  );
  return Camera;
};
