const path = require("path");

const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts); // first /products

router.get("/products/:productId", shopController.getAProduct); // must be last when dynamic route = :

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart)

router.get("/checkout", shopController.getCheckout);

router.get("/orders", shopController.getOrders);

module.exports = router;
