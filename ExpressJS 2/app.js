// Node modules
const path = require("path");

// Third party modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Local files
const adminData = require("./routes/admin"); // after setting up = const router = express.Router(); & module.exports = router;
const shopRoutes = require("./routes/shop");

// Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // serve up static css etc files - accesible publicly

// Order still matters
app.use("/admin", adminData.routes); // add a filter to URL
app.use(shopRoutes);

// Error Handling with catch all
app.use((req, res, next) => {
  // set status code to 404 = page not found
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
