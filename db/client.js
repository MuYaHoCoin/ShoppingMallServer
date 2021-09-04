const mysql = require("mysql");
const client = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "shoppingmall",
});

module.exports = client;
