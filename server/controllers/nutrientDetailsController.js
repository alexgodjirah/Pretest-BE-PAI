const { NutrientDetails } = require("../models");

class NutrientDetailsController {
    static getAllNutrientDetails = async (req, res) => {
        try {
            const allNutrientDetails = await NutrientDetails.findAll({
                order: [["productID", "ASC"]],
            });

            if (!allNutrientDetails.length) {
                return res
                    .status(404)
                    .json({ message: "Please add Nutrient Details" });
            } else {
                return res.status(200).json(allNutrientDetails);
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };

    static updateNutrientDetails = async (req, res) => {
        const { productID } = req.params;
        const { details } = req.body;

        const { role } = req.user;

        try {
            // Authorization
            if (role !== "admin") {
                return res.status(401).json({
                    message: "Only Admin is authorized to enter this page!!",
                });
            }

            // ID checker
            const isIDExist = await NutrientDetails.findOne({
                where: { id: productID },
            });

            if (!isIDExist) {
                return res.status(404).json({
                    message: "Product Nutrient Details are not found.",
                });
            }

            const payloadNutrientDetails = { details };

            const updateNutrientDetails = await NutrientDetails.update(
                payloadNutrientDetails,
                { where: { id: productID } }
            );
            if (updateNutrientDetails) {
                return res.status(200).json({
                    message: "Congrats!! Nutrient details is updated.",
                    details: updateNutrientDetails.details,
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

module.exports = NutrientDetailsController;
