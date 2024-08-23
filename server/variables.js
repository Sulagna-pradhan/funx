require("dotenv").config({ path: "./.env" });

module.exports.PORT = process.env.PORT;
module.exports.BASE_URL = process.env.BASE_URL;
module.exports.REQUEST_SIZE = process.env.REQUEST_SIZE;
