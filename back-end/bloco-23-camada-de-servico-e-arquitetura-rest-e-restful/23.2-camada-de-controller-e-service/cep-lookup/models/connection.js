const  mysql = require('mysql2/promise')

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'cep_lookup',
});

module.exports = connection;