"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GroupMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupMember.init(
    {
      nama: DataTypes.STRING,
      keterangan: DataTypes.STRING,
      contact_person_name: DataTypes.STRING,
      contact_person_email: DataTypes.STRING,
      contact_person_phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GroupMember",
      timestamps: false,
    }
  );
  return GroupMember;
};
