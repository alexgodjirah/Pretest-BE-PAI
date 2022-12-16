require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");
const privateKey = process.env.SECRETKEY || "hello world";

const generateToken = async (payload) => {
    return await jsonwebtoken.sign(payload, privateKey);
};

const verifyToken = async (token) => {
    return await jsonwebtoken.verify(token, privateKey);
};

module.exports = {
    generateToken,
    verifyToken,
};
