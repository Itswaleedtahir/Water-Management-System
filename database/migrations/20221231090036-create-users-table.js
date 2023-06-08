"use strict";

const table = "managements";
const default_value = 0;

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Date_of_issue: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      Page_no: {
        type: Sequelize.INTEGER,
        defaultValue: default_value,
        allowNull: true,
      },
      For_the_month_of: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Due_Date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      Name_of_industrial_unit: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Area: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Day_of_water_connection: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Current_water_bill: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Current_maintenance_charges: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Fire_fighting_charges: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Water_charges: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Maintenance_charges: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      surcharges: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Arrears:{
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Amount_payable_within_due_date: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Surcharges_on_current_bill: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
      },
      Amount_payable_after_the_due_date: {
        allowNull: true,
        defaultValue: default_value,
        type: Sequelize.INTEGER,
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
