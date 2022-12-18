const BenefitsController = require("../../../../controllers/benefitsController");

const benefitsRoute = require("express").Router();

benefitsRoute.get("/", BenefitsController.getAllBenefits);
benefitsRoute.put("/update/:productID", BenefitsController.updateBenefits);

module.exports = benefitsRoute;
