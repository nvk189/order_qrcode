const customer = require("../controller/customer.controller");
// const { category } = require("../model");

const router = require("express").Router();

router.get("/getAll", customer.getAll);
// router.post("/add", categoryController.add);
// router.get("/:id", categoryController.getByID);
// router.put("/update/:id", categoryController.update);

module.exports = router;
