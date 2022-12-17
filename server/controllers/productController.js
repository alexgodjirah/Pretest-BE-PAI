const { Product } = require("../models");

class ProductController {
    static getAllProduct = async (req, res) => {
        try {
            const allProduct = await Product.findAll({
                order: [["id", "ASC"]],
            });

            if (!allProduct.length) {
                return res.status(404).json("Plase add new product");
            } else {
                return res.status(200).json(allProduct);
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: error.message,
            });
        }
    };
}

module.exports = ProductController;
