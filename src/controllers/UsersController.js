const execSQLQuery = require('../database/connection')

const FilmsController = require('./FilmsController')

const selectUsers = (req, res) => {
    execSQLQuery('SELECT * FROM USERS;', res)
}

const filterUsers = (req, res) => {
    let filter = ''
    if (req.params.id) {
        filter = 'WHERE ID_USERS=' + parseInt(req.params.id)
    }

    FilmsController.deleteFilms(req, res)  
    execSQLQuery('SELECT * FROM USERS ' + filter, res)
}

const insertUsers = (req, res) => {
    
    const name = req.body.USERS
    const password = req.body.PASSWORD_USERS

    execSQLQuery(`INSERT INTO USERS(USERS, PASSWORD_USERS) ` +
        `VALUES('${name}', '${password}')`, res)
}

const updateUsers = (req, res) => {
    const id = parseInt(req.params.id)
    const name = req.body.USERS
    const password = req.body.PASSWORD_USERS

    execSQLQuery(`UPDATE USERS SET USERS='${name}', PASSWORD_USERS='${password}' ` +
        `WHERE ID_USERS=${id}`, res)
}

const deleteUsers = (req, res) => {
    const id = parseInt(req.params.id)

    execSQLQuery(`DELETE FROM USERS WHERE ID_USERS=${id}`, res)
}

const methods = {
    selectUsers,
    filterUsers,
    insertUsers,
    updateUsers,
    deleteUsers
}

module.exports = methods