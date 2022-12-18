// Dotenv Config
require("dotenv").config();

// Express and App Installation
const express = require("express");
const App = express();
const routes = require("./routes");

// Libraries Installation
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Port
const PORT = process.env.PORT || 4000;

App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use(cors());
App.use(cookieParser());
App.use("/", routes);

App.listen(PORT, () => {
    console.log(`Listening on PORT: http://localhost:${PORT}`);
});
