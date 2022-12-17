const productRoute = require("express").Router();

// Controller
const ProductController = require("../../../controllers/productController");

productRoute.get("/", ProductController.getAllProduct);
productRoute.post("/create", ProductController.createProduct);

module.exports = productRoute;
