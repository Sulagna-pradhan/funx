const { DATABASE_URL } = require("../variables");

module.exports.initializeStore = (session) => {
  const PgStore = require("connect-pg-simple")(session);
  return new PgStore({
    conString: DATABASE_URL,
    tableName: "sessions",
  });
};
