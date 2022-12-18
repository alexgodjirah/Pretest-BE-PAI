const BenefitsController = require("../../../../controllers/benefitsController");

const benefitsRoute = require("express").Router();

benefitsRoute.get("/", BenefitsController.getAllBenefits);

module.exports = benefitsRoute;
