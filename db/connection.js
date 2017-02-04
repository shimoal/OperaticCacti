
//this file is named 'index.js' in will's repo
var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'guideme'
});

connection.connect();

module.exports = connection;