const productRoute = require("express").Router();

// Route
const benefitsRoute = require("./benefits");

// Product (Controller + Route)
const ProductController = require("../../../controllers/productController");

productRoute.get("/", ProductController.getAllProduct);
productRoute.post("/create", ProductController.createProduct);
productRoute.put("/update/:id", ProductController.updateProduct);
productRoute.delete("/delete/:id", ProductController.deleteProduct);

// Benefits (Controller + Route)
productRoute.use("/benefits", benefitsRoute);

module.exports = productRoute;
