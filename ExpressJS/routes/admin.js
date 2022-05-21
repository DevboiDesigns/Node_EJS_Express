const path = require("path");

const express = require("express");
const router = express.Router();

// is called top to bottom - main should be at bottom
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// app.post only fires for "POST" methods
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // redirect to any page
});

module.exports = router;
