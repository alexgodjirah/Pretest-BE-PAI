const userRoute = require("express").Router();

// Controller
const RegisterController = require("../../../controllers/registerController");

userRoute.get("/register", (req, res) => {
    res.send("this is the /user/register");
});

userRoute.post("/register", RegisterController.register, (req, res) => {
    console.log(res.body);
    return res.json({ body: req.body });
});

module.exports = userRoute;
