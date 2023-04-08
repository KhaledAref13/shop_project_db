const express = require("express");
const {
  getFormPage,
  getProducts,
  postProduct,
  error404,
  error500,
} = require("../controllers");
const router = express.Router();
router.get("/", getFormPage);
router.get("/products", getProducts);
router.post("/products", postProduct);
router.use(error404);
router.use(error500);
module.exports = router;
