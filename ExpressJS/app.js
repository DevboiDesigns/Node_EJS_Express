// Third party modules
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// Local files
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// Parser
app.use(bodyParser.urlencoded({extended: false}));

// Order still matters 
app.use(adminRoutes)
app.use(shopRoutes)


app.listen(3000);
