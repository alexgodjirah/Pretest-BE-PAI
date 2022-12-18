const { Product } = require("../models");

class ProductController {
    // Show All Product(s)
    static getAllProduct = async (req, res) => {
        try {
            const allProduct = await Product.findAll({
                order: [["id", "ASC"]],
            });

            if (!allProduct.length) {
                return res.status(404).json("Plase add new product.");
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

    // Create Product
    static createProduct = async (req, res) => {
        const { title, latinName, origins, family, pictures, description } =
            req.body;

        const { role } = req.user;

        try {
            // Authorization
            if (role !== "admin") {
                return res.status(401).json({
                    message: "Only Admin is authorized to enter this page!!",
                });
            }

            const payloadProduct = {
                title,
                latinName,
                origins,
                family,
                pictures,
                description,
            };

            const createProduct = await Product.create(payloadProduct);
            if (createProduct) {
                return res.status(201).json({
                    message: "Congrats!! Product is created.",
                    title: createProduct.title,
                    "latin name": createProduct.latinName,
                    origins: createProduct.origins,
                    family: createProduct.family,
                    pictures: createProduct.pictures,
                    description: createProduct.description,
                });
            } else {
                return res.status(400).json({ message: "Bad Request." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };

    // Update Product
    static updateProduct = async (req, res) => {
        const { id } = req.params;
        const { title, latinName, origins, family, pictures, description } =
            req.body;

        const { role } = req.user;

        try {
            // Authorization
            if (role !== "admin") {
                return res.status(401).json({
                    message: "Only Admin is authorized to enter this page!!",
                });
            }

            const payloadProduct = {
                title,
                latinName,
                origins,
                family,
                pictures,
                description,
            };

            const updateProduct = await Product.update(payloadProduct, {
                where: { id: id },
            });
            if (updateProduct) {
                return res.status(200).json({
                    message: "Congrats!! Product is updated.",
                    title: updateProduct.title,
                    "latin name": updateProduct.latinName,
                    origins: updateProduct.origins,
                    family: updateProduct.family,
                    pictures: updateProduct.pictures,
                    description: updateProduct.description,
                });
            } else {
                return res
                    .status(400)
                    .json({ message: "Bad Request or Product is not found." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };

    // Delete Product
    static deleteProduct = async (req, res) => {
        const { id } = req.params;
        const { role } = req.user;

        try {
            // Authorization
            if (role !== "admin") {
                return res.status(401).json({
                    message: "Only admin is authorized to enter this page!!",
                });
            }

            const deleteProduct = await Product.destroy({
                where: { id: id },
            });
            if (deleteProduct) {
                return res.status(200).json({
                    message: "Congrats!! Product is deleted.",
                });
            } else {
                return res
                    .status(400)
                    .json({ message: "Bad Request or Product is not found." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };
}

module.exports = ProductController;
