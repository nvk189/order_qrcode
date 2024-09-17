const product = require("../controller/product.controller");

// const { category } = require("../model");

const router = require("express").Router();

router.get("/getAll", product.getAll);
// router.post("/add", categoryController.add);
// router.get("/:id", categoryController.getByID);
// router.put("/update/:id", categoryController.update);

module.exports = router;
