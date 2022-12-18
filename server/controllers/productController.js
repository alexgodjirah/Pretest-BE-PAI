const {
    Product,
    Benefits,
    SideEffects,
    NutrientDetails,
} = require("../models");

class ProductController {
    // Show All Product(s)
    static getAllProduct = async (req, res) => {
        try {
            const allProduct = await Product.findAll({
                order: [["id", "ASC"]],
            });

            if (!allProduct.length) {
                return res
                    .status(404)
                    .json({ message: "Plase add new product." });
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
                const payloadProductID = {
                    productID: createProduct.id,
                };

                const createBenefits = await Benefits.create(payloadProductID);
                const createSideEffects = await SideEffects.create(
                    payloadProductID
                );
                const createNutrient = await NutrientDetails.create(
                    payloadProductID
                );

                if (!createBenefits || !createSideEffects || !createNutrient) {
                    return res.status(400).json({ message: "Bad Request." });
                }

                return res.status(201).json({
                    message: "Congrats!! Product is created.",
                    Title: createProduct.title,
                    "Benefits ID": createBenefits.productID,
                    "Side Effects ID": createSideEffects.productID,
                    "Nutrient ID": createNutrient.productID,
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

            // ID checker
            const isIDExist = await Product.findOne({
                where: { id: id },
            });

            if (!isIDExist) {
                return res.status(404).json({
                    message: "Product is not found",
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
                const deleteBenefits = await Benefits.destroy({
                    where: { id: id },
                });
                const deleteSideEffects = await SideEffects.destroy({
                    where: { id: id },
                });
                const deleteNutrient = await NutrientDetails.destroy({
                    where: { id: id },
                });

                if (!deleteBenefits || !deleteSideEffects || !deleteNutrient) {
                    return res.status(400).json({
                        message: "Bad Request or Product is not found.",
                    });
                }

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
