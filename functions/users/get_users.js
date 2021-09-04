const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;

getUsers = (name, con) => {
  console.log(con);
  const query = "SELECT * FROM users WHERE name = ?";
  con.query(query, [name], (err, result, fields) => {
    return json({ users: result });
  });
};

module.exports = getUsers;
