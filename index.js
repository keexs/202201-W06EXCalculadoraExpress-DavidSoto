require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("calculator:server");
const initializeServer = require("./server/index");

const app = express();
const port = process.env.SERVER_PORT || 6969;

initializeServer(port);

app.use(morgan("dev"));
app.use(express.json());

module.exports = app;
module.exports = port;
