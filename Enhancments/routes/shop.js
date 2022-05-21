const path = require("path");

const express = require("express");
const router = express.Router();

const productController = require("../controllers/products");

router.get("/", productController.getProducts);

router.get("/products", productController.getProductDetails);

router.get("/cart", productController.getCart)

module.exports = router;
