const path = require("path");

const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

// app.post only fires for "POST" methods
router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postAddProduct)

// exports.myName = myObject
module.exports = router;
