const sideEffectsRoute = require("express").Router();

const SideEffectsController = require("../../../../controllers/sideEffectsController");

sideEffectsRoute.get("/", SideEffectsController.getAllSideEffects);
sideEffectsRoute.put(
    "/update/:productID",
    SideEffectsController.updateSideEffects
);

module.exports = sideEffectsRoute;
