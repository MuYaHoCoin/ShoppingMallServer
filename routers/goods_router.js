const router = require("express").Router();
const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "shoppingmall",
});

router.get("/all", (req, res) => {
  const query = "SELECT * FROM goods";
});
