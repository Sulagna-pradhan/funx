require("dotenv").config({ path: "./.env" });

module.exports.PORT = process.env.PORT;
module.exports.BASE_URL = process.env.BASE_URL;
module.exports.DATABASE_URL = process.env.DATABASE_URL;
module.exports.REQUEST_SIZE = process.env.REQUEST_SIZE;
module.exports.SESSION_SECRET = process.env.SESSION_SECRET;
