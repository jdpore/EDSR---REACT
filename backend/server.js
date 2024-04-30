const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bcrypt = require("bcrypt");
const app = express();
app.use(cors());
app.use(express.json());

const db_conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "edsr",
});

app.post("/login", (req, res) => {
  const sql = "SELECT password FROM users WHERE `user_id` = ?";
  db_conn.query(sql, [req.body.email], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      const user = data[0];
      user.password = user.password.replace(/^\$2y(.+)$/i, "$2a$1");
      // Compare the provided password with the hashed password from the database
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) {
          return res.json("Error");
        }
        if (result) {
          return res.json("Success");
        } else {
          return res.json("Failed Log in");
        }
      });
    } else {
      return res.json("User not found");
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
