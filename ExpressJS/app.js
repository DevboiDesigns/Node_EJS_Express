// Third party modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Local files
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Order still matters
app.use('/admin', adminRoutes); // add a filter to URL 
app.use(shopRoutes);

// Error Handling with catch all
app.use((req, res, next) => {
  // set status code to 404 = page not found
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
