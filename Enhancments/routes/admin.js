const path = require("path");

const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// app.post only fires for "POST" methods
router.post("/add-product", productsController.postAddProduct);

router.get("/products", productsController.getAdminProducts);

// exports.myName = myObject
module.exports = router;
