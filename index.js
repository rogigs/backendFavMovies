const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000
const mysql = require('mysql')

// Configurando o body parser para pegar POSTS
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

app.use(bodyParser.json())

// definindo rotas
const router = express.Router()
router.get('/', (req, res) => {
    res.json(
        {
            message: 'Funcionando!'
        }
    )
})

app.use('/', router)

// Inicia o servidor
app.listen(port)
console.log('====================================');
console.log('API REST FUNCIONANDO');
console.log('====================================');

function execSQLQuery(sqlQuery, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'teste'
    })

    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(results)
        }

        connection.end()
        console.log("Executou");

    })
}

router.get('/users', (req, res) => {
    execSQLQuery('SELECT * FROM teste.USERS;', res)
})


router.get('/users/:id', (req, res) => {
    let filter = ''
    if (req.params.id) {
        filter = 'WHERE ID_USERS=' + parseInt(req.params.id)
    }

    execSQLQuery('SELECT * FROM teste.USERS ' + filter, res)
})

router.delete('/users/:id', (req, res) => {
    execSQLQuery('DELETE FROM teste.USERS WHERE ID_USERS=' + parseInt(req.params.id) + ';', res)
})

router.post('/users', (req, res) => {
    const name = req.body.USERS.substring(0, 50)
    const password = req.body.PASSWORD_USERS.substring(0, 50)
    console.log(name);
    
    execSQLQuery(`INSERT INTO teste.USERS(USERS, PASSWORD_USERS) ` +
        `VALUES('${name}', '${password}')`, res)
})

router.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const name = req.body.USERS.substring(0, 50)
    const password = req.body.PASSWORD_USERS.substring(0, 50)
    console.log(id);
    
    execSQLQuery(`UPDATE teste.USERS SET USERS='${name}', PASSWORD_USERS='${password}' ` +
        `WHERE ID_USERS=${id}`, res)
})