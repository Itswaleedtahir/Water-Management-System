/* eslint-disable no-unused-vars */
const config = require("../config");
const { Users } = require("../models");
const { generateErrorInstance } = require("../utils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    SignUp: async (req,res) =>{
        try {
            const { Name , Email , Password } = req.body 
            if (!Name || !Email || !Password) {
                throw { status: 400, message: "Required fields cannot be empty." };
              } 
              const emailfound = await Users.findOne({
                where: {
                  Email:Email,
                },
              });
              if (emailfound) {
                throw { status: 409, message: "email already exists." };
              }
              const salt = await bcrypt.genSalt(10);
              const hashedpassword = await bcrypt.hash(Password, salt);
              let userNew = await Users.create({
                Name:Name,
                Email: Email,
                Password: hashedpassword,
              });
              const token = jwt.sign(
                {
                  id: userNew.id,
                  Name:userNew.Name,
                  Email: userNew.Email,
                  Password: userNew.Password
                },
                config.get("jwt_secret")
              );
              userNew = userNew.toJSON();
              delete userNew.password;
              return res.status(200).send({ userNew, token });
        } catch (err) {
            console.log(err);
            return res
            .status(err.status || 500)
            .send(err.message || "Something went wrong!");
        }
    },
    LogIn: async (req,res)=>{
        try {
            const { Email, Password } = req.body;
      
            if (!Email || !Password) {
              throw generateErrorInstance({
                status: 400,
                message: "Required fields can't be empty",
              });
            }
      
            let user = await Users.findOne({
              where: {
                Email,
              },
            });
      
            if (!user) {
              throw generateErrorInstance({
                status: 404,
                message: "User not found",
              });
            }
      
            const passwordMatched = await bcrypt.compare(Password, user.Password);
            if (!passwordMatched) {
              throw generateErrorInstance({
                status: 401,
                message: "Invalid Password",
              });
            }
      
            user = user.toJSON();
            delete user.Password;
      
            const token = jwt.sign(user, config.get("jwt_secret"), {
              expiresIn: "1d",
            });
      
            return res.status(200).send({ user, token });
          } catch (err) {
            console.log(err);
            return res
              .status(err.status || 500)
              .send(err.message || "Something went wrong!");
          }
      
    }
 }