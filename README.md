# Node Core Modules
*some*
* http - launch a server, send requests
* https - launch a SSL server - encrypted 
* fs
* path
* os
  

# Single thread, Event Loop & Blocking code

1. Timers - execute setTimeout, setInterval Callbacks
2. Pending Callbacks - execute I/O related Callbacks that were deferred 
3. Poll - retrieve new I/O events, their callbacks
4. Check - execute setImmediate callbacks
5. Close Callbacks - execute all 'close' event callbacks 
6. process.exit - if refs == 0


# Setup

* `npm init`
* `npm install nodemon --save-dev`
  
**set start script**
`"start": "nodemon app.js"`
*run with*
`npm start`

* `npm install express --save`
* `npm install body-parser --save`

`--save-dev`   - Dev

`--save`       - Prod
  
## Usage

```js
  // Node modules
const path = require("path");

// Third party modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Local files
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // serve up static css etc files - accesible publicly

// Order still matters
app.use("/admin", adminRoutes); // add a filter to URL
app.use(shopRoutes);

// Error Handling with catch all
app.use((req, res, next) => {
  // set status code to 404 = page not found
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
```

**route usage**
```js
const path = require('path')

const express = require("express");
const router = express.Router();

const rootDir = require('../util/path')

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  });

module.exports = router;
```

**helper to point at directory**

```js
const path = require("path");

module.exports = path.dirname(require.main.filename);

// points at our directory 
```


# Templating Engines 

* HTMLish Template 
* Node/ Express Content 
* replaces placeholders/ snippets with HTML content 
* dynamic on the fly HTML file 
  
*available*
1. EJS `npm install --save ejs`
2. Pug (jade) `npm install --save pug`
3. Handlebars `npm install --save express-handlebars`

## EJS syntax

*caches data if unchanged*

1. 
* `<%= %>`  renders a variable 

*usage*

```js
<title><%= pageTitle %></title>
```

2. 
* `<% %>` inject vanilla javascript 

*usage*

```js
<% for (let product of prods) { %>

// HTML goes here 

 <% } %>
```

3. 
* `<%- include('file path') %>`  inject un-escaped HTML code 

*usage*

```js
<%- include('includes/head.js') %> 
```


# MVC - Design pattern

* `models` - data 
* `views` - shown to client
* `controllers` - routes/ middleware similar logic 