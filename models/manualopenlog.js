'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ManualOpenLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ManualOpenLog.init({
    user_id: DataTypes.INTEGER,
    gate_out_id: DataTypes.INTEGER,
    alasan: DataTypes.STRING,
    snapshots: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'ManualOpenLog',
  });
  return ManualOpenLog;
};