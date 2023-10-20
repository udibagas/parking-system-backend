"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("GroupMembers", {
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
      keterangan: {
        type: Sequelize.STRING,
      },
      contact_person_name: {
        type: Sequelize.STRING,
      },
      contact_person_email: {
        type: Sequelize.STRING,
      },
      contact_person_phone: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("GroupMembers");
  },
};
