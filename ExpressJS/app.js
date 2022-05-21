// Node modules
const http = require("http");

// Third party modules
const express = require("express");

// local files

// variables
const app = express();

// Executed with every request
app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // Allows request to continue to next middleware in line
});
app.use((req, res, next) => {
  console.log("In the agia middleware!");
  res.send("<h1>My Site</h1>"); // Sets headers by default
});
const server = http.createServer(app);

server.listen(3000);
