const NutrientDetailsController = require("../../../../controllers/nutrientDetailsController");

const nutrientDetailsRoute = require("express").Router();

nutrientDetailsRoute.get("/", NutrientDetailsController.getAllNutrientDetails);
nutrientDetailsRoute.put(
    "/update/:productID",
    NutrientDetailsController.updateNutrientDetails
);

module.exports = nutrientDetailsRoute;
