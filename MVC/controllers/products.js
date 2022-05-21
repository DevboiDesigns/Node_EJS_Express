const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // Title comes from name in html = <input type="text" name="title" id="title">
  product.save();
  res.redirect("/"); 
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: true,
        productCSS: true,
      });
  });
  
};
