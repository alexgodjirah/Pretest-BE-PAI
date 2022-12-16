const v1 = require("express").Router();

// User Route
const userRoute = require("./user");
v1.use("/user", userRoute);

v1.get("/", (req, res) => {
    res.send("this is from v1");
});

module.exports = v1;
