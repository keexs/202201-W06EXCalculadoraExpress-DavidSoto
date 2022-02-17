require("dotenv").config();
const debug = require("debug")("calculator:*");
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.SERVER_PORT || 6969;

app.use(morgan("dev"));
app.use(express.json());

const initializeServer = () =>
    new Promise((resolve, reject) => {
        const server = app.listen(port, () => {
            debug(`Server is up => http://localhost:${port}`);
            resolve();
        });

        server.on("error", (error) => {
            debug(`Error on server ${port}: ${error.message}`);
            reject(error.message);
        });
    });

app.use((req, res, next) => {
    debug(`A request has arrived to ${req.url}`);
    next();
});

module.exports = initializeServer();
