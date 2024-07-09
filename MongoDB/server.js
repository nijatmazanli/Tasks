const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


const port = 5000;

app.get("/", (res, req) => {
    
});

app.listen(port, () => {
  console.log("SDsd");
});
