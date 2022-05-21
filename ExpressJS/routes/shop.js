const path = require('path')

const express = require("express");
const router = express.Router();

const rootDir = require('../util/path')

router.get("/", (req, res, next) => {
    console.log("In the agia middleware!");
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  });

module.exports = router;