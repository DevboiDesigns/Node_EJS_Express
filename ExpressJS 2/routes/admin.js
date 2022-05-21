const path = require("path");

const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");

const products = [];

// is called top to bottom - main should be at bottom
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "Add Products" });
});

// app.post only fires for "POST" methods
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  // console.log(products)
  res.redirect("/"); // redirect to any page
});

// exports.myName = myObject
exports.routes = router;
exports.products = products;
