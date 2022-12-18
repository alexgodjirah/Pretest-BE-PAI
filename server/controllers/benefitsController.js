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
}

module.exports = BenefitsController;
