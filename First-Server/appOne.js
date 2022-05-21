const http = require("http"); // Global module
//const myFile = require("./myFile"); // local file

// function rqListener(req, res) {

// }
// // without function brackets () will run when req come in not immediately
// http.createServer(rqListener);

// Creates a Server - capture to execute listen
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); - hard exits event loop - normally would not use
  res.setHeader("Content-Type", "text/html"); // attach header that type of content is HTML
  res.write("<html></html>"); // can send back simple html - not optimal
  res.end();
});

// Headers - meta data -
// request - object that is listening for incoming requests - ie. endpoint calls for json
// response -

server.listen(3000);
