const { error404, error500 } = require("./errorsController");
const {
  getFormPage,
  getProducts,
  postProduct,
} = require("./productsController");

module.exports = { error404, error500, getFormPage, getProducts, postProduct };
