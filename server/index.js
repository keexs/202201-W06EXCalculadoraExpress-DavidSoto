require("dotenv").config();
const debug = require("debug")("calculator:*");
const chalk = require("chalk");
const express = require("express");

const app = express();

const initializeServer = (port) =>
    new Promise((resolve, reject) => {
        const server = app.listen(port, () => {
            debug(chalk.redBright(`Server is up => http://localhost:${port}`));

            resolve();
        });

        server.on("error", (error) => {
            debug(`Error on server ${port}: ${error.message}`);
            reject(error.message);
        });
    });

module.exports = initializeServer();
