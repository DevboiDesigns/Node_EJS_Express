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
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // Save a product
  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  // Get all products
  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }

  // Find one product
  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
