const { SideEffects } = require("../models");

class SideEffectsController {
    // Show All Benefits
    static getAllSideEffects = async (req, res) => {
        try {
            const allSideEffects = await SideEffects.findAll({
                order: [["productID", "ASC"]],
            });

            if (!allSideEffects.length) {
                return res
                    .status(404)
                    .json({ message: "Please add side effects" });
            } else {
                return res.status(200).json(allSideEffects);
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };

    // Update SideEffects
    static updateSideEffects = async (req, res) => {
        const { productID } = req.params;
        const { title } = req.body;

        const { role } = req.user;

        try {
            // Authorization
            if (role !== "admin") {
                return res.status(401).json({
                    message: "Only Admin is authorized to enter this page!!",
                });
            }

            // ID checker
            const isIDExist = await SideEffects.findOne({
                where: { id: productID },
            });

            if (!isIDExist) {
                return res.status(404).json({
                    message: "Product Side Effects are not found",
                });
            }

            const payloadSideEffects = { title };

            const updateSideEffects = await SideEffects.update(
                payloadSideEffects,
                { where: { id: productID } }
            );
            if (updateSideEffects) {
                return res.status(200).json({
                    message: "Congrats!! Side Effects is updated",
                    title: updateSideEffects.title,
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

module.exports = SideEffectsController;
