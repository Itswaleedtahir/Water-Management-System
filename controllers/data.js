/* eslint-disable no-unused-vars */
const config = require("../config");
const { Managements } = require("../models");
module.exports = {
  // Getting data
  Getting_data: async (req,res)=>{
    try {
      const users = await Managements.findAll();
     return res.status(200).send({ users });
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong...");
    }
  },
  Create: async (req, res) => {
    try {
      const { Date_of_issue,Page_no,For_the_month_of,Due_Date,Name_of_industrial_unit,Area,Day_of_water_connection,Current_water_bill,Current_maintenance_charges,Fire_fighting_charges,Water_charges,Maintenance_charges,surcharges,Amount_payable_within_due_date,Surcharges_on_current_bill,Amount_payable_after_the_due_date} = req.body;

      if (!Date_of_issue || !Name_of_industrial_unit || !Current_water_bill) {
        throw { status: 400, message: "Required fields cannot be empty." };
      }
      let result =req.body.Fire_fighting_charges + req.body.Water_charges + req.body.Maintenance_charges + req.body.surcharges;
      const Data = await Managements.create({
        Date_of_issue:Date_of_issue,
        Name_of_industrial_unit:Name_of_industrial_unit,
        Page_no:Page_no,
        For_the_month_of:For_the_month_of,
        Due_Date:Due_Date,
        Area:Area,
        Day_of_water_connection:Day_of_water_connection,
        Current_water_bill:Current_water_bill,
        Current_maintenance_charges:Current_maintenance_charges,
        Fire_fighting_charges:Fire_fighting_charges,
        Water_charges:Water_charges,
        Maintenance_charges:Maintenance_charges,
        surcharges:surcharges,
        Arrears:result,
        Amount_payable_within_due_date:Amount_payable_within_due_date,
        Surcharges_on_current_bill:Surcharges_on_current_bill,
        Amount_payable_after_the_due_date:Amount_payable_after_the_due_date,
      })
      const { id, _previousDataValues, ...responseData } = Data.dataValues;
      return res.status(200).send("Submitted");
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  },
};
