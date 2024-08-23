const express = require("express");
const { PORT, BASE_URL, REQUEST_SIZE } = require("./variables");
const path = require("path");
const layout = require("express-ejs-layouts");
// const { prismaClient } = require("./database/client");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));
app.set("layout", "layouts/layout");

app.use("/public", express.static(path.resolve(__dirname, "..", "public")));
app.use(express.json({ limit: REQUEST_SIZE }));
app.use(express.urlencoded({ extended: false, limit: REQUEST_SIZE }));
app.use(layout);

app.get("/", (req, res) => {
  res.render("test", {
    title: "testing",
  });
});

app.listen(PORT, () => {
  console.log(`\nServer started at: ${BASE_URL}:${PORT}`);
});
