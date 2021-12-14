const mysql = require("mysql");
const host = "localhost";

let connection = mysql.createConnection({
    host     : 'localhost', //실제로 연결할 데이터베이스의 위치
    user     : 'web04',
    password : 'ChangeMe!21',
    database : 'web04' //데이터베이스 이름
  });

  connection.connect();

  module.exports = connection;
