const { Customer } = require("../models");

const getAll = async (req, res) => {
  let customer = await Customer.findAll();
  console.log(customer);
  res.status(200).send(customer);
};

module.exports = {
  getAll,
  // add,
  // getByID,
  // update,
};
