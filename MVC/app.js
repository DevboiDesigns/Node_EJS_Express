// Node modules
const path = require("path");

// Third party modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// global config value - set dynamic template engine
app.set("view engine", "ejs"); // pug/ ejs - set template engine
//app.set("views", "views"); // defaults to views folder but can set explicitly

// Local files
const adminRoutes = require("./routes/admin"); // after setting up = const router = express.Router(); & module.exports = router;
const shopRoutes = require("./routes/shop");
const errorsController = require('./controllers/error')

// Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // serve up static css etc files - accesible publicly

// Order still matters
app.use("/admin", adminRoutes); // add a filter to URL
app.use(shopRoutes);

// Error Handling with catch all
app.use(errorsController.get404);

app.listen(3000);
