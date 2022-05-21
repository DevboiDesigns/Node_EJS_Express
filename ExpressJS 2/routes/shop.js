const path = require("path");

const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log('ShopJS', adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
