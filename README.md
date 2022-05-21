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


# Errors

* syntax
* runtime
* logic 
  

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