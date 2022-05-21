// Third party modules
const express = require("express");
const bodyParser = require('body-parser')

// variables
const app = express();

// Parser
app.use(bodyParser.urlencoded({extended: false}));

// is called top to bottom - main should be at bottom
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  ); // Sets headers by default
});

// app.post only fires for "POST" methods 
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // redirect to any page
});

app.use("/", (req, res, next) => {
  console.log("In the agia middleware!");
  res.send("<h1>My Site</h1>"); // Sets headers by default
});

app.listen(3000);
