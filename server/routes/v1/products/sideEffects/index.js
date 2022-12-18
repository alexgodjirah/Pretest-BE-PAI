const SideEffectsController = require("../../../../controllers/sideEffectsController");

const sideEffectsRoute = require("express").Router();

sideEffectsRoute.get("/", SideEffectsController.getAllSideEffects);
sideEffectsRoute.put(
    "/update/:productID",
    SideEffectsController.updateSideEffects
);

module.exports = sideEffectsRoute;
