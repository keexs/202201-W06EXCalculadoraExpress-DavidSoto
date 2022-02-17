require("dotenv").config();
const { drawCalculator } = require("./operationsFunctions");
const debug = require("debug")("calculator:server");
const http = require("http");
const url = require("url");
const chalk = require("chalk");

const server = http.createServer();

const port = process.env.SERVER_PORT || 6969;
server.listen(port, () => {
    debug(chalk.redBright(`Server is up => http://localhost:${port}`));
});

server.on("error", (error) => {
    debug(`Error on server ${port}: ${error.message}`);
});

server.on("request", (request, response) => {
    debug(`Request arrived ${request.url} with method ${request.method}`);
    if (request.url.startsWith("/calculator?")) {
        const queryParams = url.parse(request.url, true).query;

        if (
            Number.isNaN(+queryParams.a) === true ||
            Number.isNaN(+queryParams.b) === true
        ) {
            response.write("<h1> Try Again </h1>");
        } else {
            response.write(drawCalculator(queryParams.a, queryParams.b));
        }
    } else {
        response.statusCode = 404;
        response.write("<h1>Error 404</h1>");
    }
    response.end();
});
