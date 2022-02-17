require("dotenv").config();
const debug = require("debug")("calculator:*");
const chalk = require("chalk");
const app = require("../index");

const initializeServer = (port) =>
    new Promise((resolve, reject) => {
        const server = app.listen(port, () => {
            debug(chalk.redBright(`Server is up => http://localhost:${port}`));

            resolve();
        });

        app.on("error", (error) => {
            debug(`Error on server ${port}: ${error.message}`);
            reject(error);
        });
    });

module.exports = initializeServer();
