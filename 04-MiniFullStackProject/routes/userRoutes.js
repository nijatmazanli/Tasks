const router = require("express").Router();
const fs = require("fs");

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "prime",
  password: "pr12345nmA",
  database: "sds",
});

const readData = () => {
  return JSON.parse(fs.readFileSync("./data/users.json"));
};
const writeData = (data) => {
  fs.writeFileSync("./data/users.json", JSON.stringify(data));
};



router.get("/add/", (res, req) => {
  const data = { name: "John Doe", age: 100 };
  const sql = `INSERT INTO my_table (name, age) VALUES ("${data.name}", ${data.age})`;

  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the MySQL database:", error);
      return;
    }
    console.log("Successfully connected to the MySQL database.");
  });

  // Example query (replace with your desired query)

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return;
    }
    console.log("Query results:", results);
  });
  res.send(200).json(results);
});


router.get("/", (res, req) => {
  const data = { name: "John Doe", age: 100 };
  const sql = `INSERT INTO my_table (name, age) VALUES ("${data.name}", ${data.age})`;

  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the MySQL database:", error);
      return;
    }
    console.log("Successfully connected to the MySQL database.");
  });

  // Example query (replace with your desired query)

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return;
    }
    console.log("Query results:", results);
  });
  res.send(200).json(results);
  
});
 

router.get("/:id", (req, res) => {
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
  res.send(200).json(results);
});
router.get("/", (req, res) => {
  const users = readData();
  res.render("users", { users });
});

router.post("/", (req, res) => {
  const users = readData();
  const uniqueId = new Date();
  const date = new Date();
  const newUser = {
    id: uniqueId.getTime(),
    createdAt: date,
    updatedAt: date,
    ...req.body,
  };
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

router.delete("/:id", (req, res) => {
  const users = readData();
  const index = users.findIndex((u) => u.id == req.params.id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    writeData(users);
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
