const mysql = require('mysql')

// Configurações da conexão com o banco de dados mysql
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'favMovies'
})

module.exports = connection
