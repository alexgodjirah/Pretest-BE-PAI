const productRoute = require("express").Router();

// Controller
const ProductController = require("../../../controllers/productController");

productRoute.get("/", ProductController.getAllProduct);
productRoute.post("/create", ProductController.createProduct);
productRoute.put("/update/:id", ProductController.updateProduct);
productRoute.delete("/delete/:id", ProductController.deleteProduct);

module.exports = productRoute;
