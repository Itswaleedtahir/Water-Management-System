"use strict";

const table = "users";

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name:{
          allowNull: false,
          type: Sequelize.STRING,
      },
      Email:{
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
      },
      Password:{
          allowNull: false,
          type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async function (queryInterface) {
    await queryInterface.dropTable(table);
  },
};
