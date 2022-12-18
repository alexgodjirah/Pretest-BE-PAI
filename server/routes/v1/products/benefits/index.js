const benefitsRoute = require("express").Router();

const BenefitsController = require("../../../../controllers/benefitsController");

benefitsRoute.get("/", BenefitsController.getAllBenefits);
benefitsRoute.put("/update/:productID", BenefitsController.updateBenefits);

module.exports = benefitsRoute;
