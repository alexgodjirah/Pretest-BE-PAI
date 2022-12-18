const productRoute = require("express").Router();

// Route
const benefitsRoute = require("./benefits");
const sideEffectsRoute = require("./sideEffects");

// Product (Controller + Route)
const ProductController = require("../../../controllers/productController");

productRoute.get("/", ProductController.getAllProduct);
productRoute.post("/create", ProductController.createProduct);
productRoute.put("/update/:id", ProductController.updateProduct);
productRoute.delete("/delete/:id", ProductController.deleteProduct);

// Benefits (Controller + Route)
productRoute.use("/benefits", benefitsRoute);
productRoute.use("/side-effects", sideEffectsRoute);

module.exports = productRoute;
