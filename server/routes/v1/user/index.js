const userRoute = require("express").Router();

// Controller
const RegisterController = require("../../../controllers/registerController");
const LoginController = require("../../../controllers/loginController");

userRoute.get("/register", (req, res) => {
    res.send("this is the /user/register");
});
userRoute.get("/login", (req, res) => {
    res.send("this is the /user/login");
});

userRoute.post("/register", RegisterController.register, (req, res) => {
    console.log(res.body);
    return res.json({ body: req.body });
});

userRoute.post("/login", LoginController.login, (req, res) => {
    console.log(res.body);
    return res.json({ body: req.body });
});

module.exports = userRoute;
