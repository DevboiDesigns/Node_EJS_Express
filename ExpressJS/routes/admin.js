const express = require("express");
const router = express.Router();

// is called top to bottom - main should be at bottom
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  ); // Sets headers by default
});

// app.post only fires for "POST" methods
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // redirect to any page
});

module.exports = router;
