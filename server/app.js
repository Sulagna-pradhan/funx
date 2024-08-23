const express = require("express");
const layout = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const { PORT, BASE_URL, REQUEST_SIZE } = require("./variables");
const { sessionConfig } = require("./session/config");
const { initializeCsrf } = require("./middlewares/csrf");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));
app.set("layout", "layouts/layout");

app.use("/public", express.static(path.resolve(__dirname, "..", "public")));
app.use(express.json({ limit: REQUEST_SIZE }));
app.use(express.urlencoded({ extended: false, limit: REQUEST_SIZE }));
app.use(layout);
app.use(cookieParser());
app.use(session(sessionConfig(session)));
app.use(initializeCsrf);

app.get("/", (req, res) => {
  res.render("test", {
    title: "test",
  });
});

app.listen(PORT, () => {
  console.log(`\nServer started at: ${BASE_URL}:${PORT}`);
});
