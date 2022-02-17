require("dotenv").config();
const debug = require("debug")("calculator:*");
const server = require("./server/index");
const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 6969;

(async () => {
    try {
        await initializeServer(port);
    } catch {
        debug(`Server is down => http://localhost:${port}`);
    }
})();

module.exports = server;
