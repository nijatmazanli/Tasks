const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`APP is listening on ${PORT}`);
});


