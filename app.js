const path = require("path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.send(`Saw request at ${req.url}.`);
});

app.get("/index", (req, res) => {
  res.render("pages/index");
});

module.exports = app;
