const v1 = require("express").Router();
const ProductController = require("../../controllers/productController");
const authentication = require("../../middlewares/authentication");
const userRoute = require("./user");

v1.get("/", (req, res) => {
    res.send("this is from v1");
});

// User Route
v1.use("/user", userRoute);
v1.use(authentication);
v1.get("/product", ProductController.getAllProduct);

module.exports = v1;
