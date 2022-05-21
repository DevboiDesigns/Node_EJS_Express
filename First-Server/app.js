const http = require("http");
// Local
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
