"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ParkingTransactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      is_member: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      jenis_kendaraan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gate_in_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "GateIns",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      gate_out_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "GateOuts",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      time_in: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time_out: {
        type: Sequelize.DATE,
      },
      nomor_barcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomor_kartu: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      member_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Members",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      plat_nomor: {
        type: Sequelize.STRING,
      },
      tarif: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      operator: {
        type: Sequelize.STRING,
      },
      denda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      edit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      edit_by: {
        type: Sequelize.STRING,
      },
      manual: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      shift_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Shifts",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      group: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ParkingTransactions");
  },
};
