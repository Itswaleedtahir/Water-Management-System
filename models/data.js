"use strict";
const moment = require("moment");
const default_value = 0;
module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define("managements", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Date_of_issue: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Page_no: {
      type: DataTypes.INTEGER,
      defaultValue: default_value,
      allowNull: true,
    },
    For_the_month_of: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Due_Date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Name_of_industrial_unit: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Area: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Day_of_water_connection: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    Current_water_bill: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Current_maintenance_charges: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Fire_fighting_charges: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Water_charges: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Maintenance_charges: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    surcharges: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Arrears:{
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Amount_payable_within_due_date: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Surcharges_on_current_bill: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    Amount_payable_after_the_due_date: {
      allowNull: true,
      defaultValue: default_value,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },

  });

  Data.beforeCreate(async (user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });
  Data.beforeUpdate(async (user) => {
    user.dataValues.updatedAt = moment().unix();
  });
  console.log(default_value)
  return Data;
};
