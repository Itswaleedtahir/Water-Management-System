"use strict";
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    Email:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    Password:{
        allowNull: false,
        type: DataTypes.STRING,
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

  User.beforeCreate(async (user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });
  User.beforeUpdate(async (user) => {
    user.dataValues.updatedAt = moment().unix();
  });
  return User;
};
