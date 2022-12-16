// Dotenv Config
require("dotenv").config();

// Express and App Installation
const express = require("express");
const App = express();

// Dependencies Installation
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Port
const PORT = process.env.PORT || 4000;

App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use(cors());
App.use(cookieParser());

App.get("/", (req, res) => {
    res.send("hello world");
});

App.listen(PORT, () => {
    console.log(`Listening on PORT: http://localhost:${PORT}`);
});
