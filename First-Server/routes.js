const fs = require("fs");

let messageIndex = 0;

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // === same type and value
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end(); // required to exit function
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    // register an event listener
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      // Parse Data
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      messageIndex += 1;
      fs.writeFile(`message${messageIndex}.txt`, message, (err) => {
        // writeFileSync - blocks code until this is done
        res.statusCode = 302; // redirect - send to Location: value
        res.setHeader("Location", "/");

        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from Node.js</h1></body>");
  res.write("</html>");
  res.end();
};

// ------------------------------------- Exporting -------------------------------

// ------ 1 method - variable specific - can be anything
// module.exports = requestHandler;

//------- 2 method - many exports
module.exports = {
  handler: requestHandler,
  someText: "Some Text",
};

//-------- 3 method
// exports.handler = requestHandler;
// exports.someText = "Some Text";
