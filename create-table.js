const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'teste'
})

connection.connect((error) => {
    if (error) {
        return console.log(error);
    }
    console.log("conectou");
    createTable(connection)
    addRows(connection)
})


function createTable(conn) {

    const sql = "create table if not exists USERS ( \n" +
        "ID_USERS int not null auto_increment, \n" +
        "USERS varchar(50) not null, \n" +
        "PASSWORD_USERS varchar(50) not null, \n" +
        "primary key(ID_USERS) \n" +
        ");"

    conn.query(sql, (error, results, fields) => {
        if (error) {
            return console.log(error);
        }
        console.log("Tabela criada");
    })
}

function addRows(conn) {
    const sql = "insert into USERS(USERS, PASSWORD_USERS) values ?"
    const values = [
        ['admin_igor', '123'],
        ['admin_lucas', '123']
    ]

    conn.query(sql, [values], (error, results, fields) => {
        if (error) {
            return console.log(error);
        }
        console.log("Usúarios adicionados");
        conn.end()
    })
}