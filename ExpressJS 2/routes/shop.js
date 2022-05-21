const path = require("path");

const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // can pass as many parameters to render - ie. prods, title etc = access in .pug w/ #{docTitle}
  res.render("shop", { prods: products, docTitle: "Shop" }); //------ render the pug/ template file
});

module.exports = router;
