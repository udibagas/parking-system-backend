"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Snapshots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      parking_transaction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ParkingTransactions",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      kamera_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Kameras",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      snapshotable_id: {
        type: Sequelize.INTEGER,
      },
      snapshotable_type: {
        type: Sequelize.STRING,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Snapshots");
  },
};
