const fs = require("fs");
const path = require("path"); // construct path for all operating systems

const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );

// helper function
const getProductsFromFile = (callBack) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return callBack([]); // return will exit the function also
    }
    callBack(JSON.parse(fileContent));
  });
};

// Product Model
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  // Save a product
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // Get all products
  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
};
