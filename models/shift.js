"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async getShiftIdByTime(time) {
      const shift = await this.findOne({
        where: sequelize.literal(`'${time}' BETWEEN mulai AND selesai`),
      });

      return shift ? shift.id : null;
    }
  }

  Shift.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nama shift harus diisi" },
          notEmpty: { msg: "Nama shift harus diisi" },
        },
      },
      mulai: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Waktu mulai harus diisi" },
          notEmpty: { msg: "Waktu mulai harus diisi" },
        },
      },
      selesai: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Waktu selesai harus diisi" },
          notEmpty: { msg: "Waktu selesai harus diisi" },
        },
      },
    },
    {
      sequelize,
      modelName: "Shift",
      timestamps: false,
    }
  );
  return Shift;
};
