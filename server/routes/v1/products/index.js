const productRoute = require("express").Router();

// Controller
const ProductController = require("../../../controllers/productController");

productRoute.get("/", ProductController.getAllProduct);
productRoute.post("/create", ProductController.createProduct);
productRoute.put("/update/:id", ProductController.updateProduct);

module.exports = productRoute;
