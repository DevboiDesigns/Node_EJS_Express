const path = require('path')

const express = require('express')
const parser = require('body-parser')

const app = express()

// parser & serving static files 
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



app.listen(3000)