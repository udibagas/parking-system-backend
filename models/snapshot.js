'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Snapshot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Snapshot.init({
    parking_transaction_id: DataTypes.INTEGER,
    kamera_id: DataTypes.INTEGER,
    snapshotable_id: DataTypes.INTEGER,
    snapshotable_type: DataTypes.STRING,
    path: DataTypes.STRING,
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Snapshot',
  });
  return Snapshot;
};