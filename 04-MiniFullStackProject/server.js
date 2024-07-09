const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "prime",
    password: "pr12345nmA",
    database: "sds",
  });


const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const basketRoutes = require("./routes/basketRoutes");

app.get("/", (req, res) => {
 
  // Replace with your connection details


  // Connect to the database
  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the MySQL database:", error);
      return;
    }
    console.log("Successfully connected to the MySQL database.");
  });

  // Example query (replace with your desired query)
  const sql = "SELECT * FROM mytable";

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return;
    }
    console.log("Query results:", results);
  });

  // Close the connection after use (optional)
  // connection.end();
  res.render("home");
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/baskets", basketRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`APP is listening on ${PORT}`);
});


