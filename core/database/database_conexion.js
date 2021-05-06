const mysql = require('mysql');
const conection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'sistema_biblioteca'
});

module.exports = conection;