require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const server = require("./server/index");
const debug = require("debug")("calculator:server");
const initializeServer = require("./server/index");

const app = express();
const port = process.env.SERVER_PORT || 6969;

(async () => {
    try {
        await initializeServer(port);
    } catch {
        debug(`Server is down => http://localhost:${port}`);
    }
})();

app.use(morgan("dev"));
app.use(express.json());

module.exports = server;
module.exports = port;
