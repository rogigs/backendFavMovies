const connection = require('./config')

// Realiza a query e verifica conexao

function execSQLQuery(sqlQuery, res) {
    
    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(results)
        }

        // connection.end()
    })
}

module.exports = execSQLQuery
