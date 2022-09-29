const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql');
const db = mysql.createConnection({   host: "localhost",   user: "root",   password: "", dbName : "JobDataBase" });
db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });





app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });










