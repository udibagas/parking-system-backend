"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MemberRenewals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      dari_tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      sampai_tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      siklus_pembayaran_unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      siklus_pembayaran: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("MemberRenewals");
  },
};
