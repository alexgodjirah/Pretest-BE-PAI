const v1 = require("express").Router();

v1.get("/", (req, res) => {
    res.send("this is from v1");
});

module.exports = v1;
