const { Benefits } = require("../models");

class BenefitsController {
    // Show All Benefits
    static getAllBenefits = async (req, res) => {
        try {
            const allBenefits = await Benefits.findAll({
                order: [["productID", "ASC"]],
            });

            if (!allBenefits.length) {
                return res
                    .status(404)
                    .json({ message: "Please add benefits." });
            } else {
                return res.status(200).json(allBenefits);
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: error.message,
            });
        }
    };

    // Update Benefits
    static updateBenefits = async (req, res) => {
        const { productID } = req.params;
        const { title, description } = req.body;

        const { role } = req.user;

        try {
            // Authorization
            if (role !== "admin") {
                return res.status(401).json({
                    message: "Only Admin is authorized to enter this page!!",
                });
            }

            // ID checker
            const isIDExist = await Benefits.findOne({
                where: { id: productID },
            });

            if (!isIDExist) {
                return res.status(404).json({
                    message: "Product Benefits are not found",
                });
            }

            const payloadBenefits = {
                title,
                description,
            };

            const updateBenefits = await Benefits.update(payloadBenefits, {
                where: { id: productID },
            });
            if (updateBenefits) {
                return res.status(200).json({
                    message: "Congrats!! Benefits is updated.",
                    title: updateBenefits.title,
                    description: updateBenefits.description,
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

module.exports = BenefitsController;
