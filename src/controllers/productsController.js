const { join } = require("path");

const getFormPage = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "index.html"));
};

const getProducts = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "products.html"));
};

const postProduct = (req, res) => {
  res.redirect("/products");
};

module.exports = { getFormPage, getProducts, postProduct };
