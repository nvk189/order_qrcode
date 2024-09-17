const { Product } = require("../models");

const getAll = async (req, res) => {
  let product = await Product.findAll();
  res.status(200).send(product);
};

module.exports = {
  getAll,
  // add,
  // getByID,
  // update,
};
