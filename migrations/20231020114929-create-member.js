"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nomor_kartu: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      expiry_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      last_transaction: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      group_member_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "GroupMembers",
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      },
      berbayar: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      siklus_pembayaran_unit: {
        type: Sequelize.STRING,
      },
      register_date: {
        type: Sequelize.DATE,
      },
      siklus_pembayaran: {
        type: Sequelize.INTEGER,
      },
      tarif: {
        type: Sequelize.INTEGER,
      },
      last_in: {
        type: Sequelize.DATE,
      },
      last_out: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Members");
  },
};
