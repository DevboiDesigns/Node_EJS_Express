const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("In the agia middleware!");
    res.send("<h1>My Site</h1>"); // Sets headers by default
  });

module.exports = router;