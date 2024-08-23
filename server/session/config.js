const crypto = require("crypto");

const { DATABASE_URL, SESSION_SECRET } = require("../variables");

module.exports.sessionConfig = (session) => {
  const PgStore = require("connect-pg-simple")(session);

  const pgStore = new PgStore({
    conString: DATABASE_URL,
    tableName: "sessions",
  });

  return {
    genid: () => {
      return crypto.randomUUID();
    },
    name: "X_SID",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    },
    store: pgStore,
  };
};
