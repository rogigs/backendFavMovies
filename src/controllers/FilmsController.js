const execSQLQuery = require('../database/connection')

const selectFilms = (req, res) => {
    execSQLQuery('SELECT * FROM FILMS', res)
}

const filterFilmsUsers = (req, res) => {
    let filter = ''
    if (req.params.id) {
        filter = 'WHERE ID_USERS=' + parseInt(req.params.id)
    }

    execSQLQuery('SELECT * FROM FILMS ' + filter, res)
}

const insertFilmsUsers = (req, res) => {
    const id_users = req.body.ID_USERS
    const title = req.body.TITLE
    const year = req.body.YEAR_FILM
    const actors = req.body.ACTORS
    const plot = req.body.PLOT
    const avaliation = req.body.AVALIATION
    const comments = req.body.COMMENTS

    execSQLQuery(`insert into FILMS(ID_USERS, TITLE, YEAR_FILM, ACTORS, PLOT, AVALIATION, COMMENTS)` +
        `VALUES(${id_users}, '${title}', '${year}', '${actors}', '${plot}', ${avaliation}, '${comments}');`, res)
}

const updateFilmsUsers = (req, res) => {
    const id_films = parseInt(req.params.id)
    const avaliation = req.body.AVALIATION
    const comments = req.body.COMMENTS
    
    execSQLQuery(`UPDATE FILMS SET AVALIATION='${avaliation}', COMMENTS='${comments}' ` +
        `WHERE ID_FILM=${id_films}`, res)
}

const deleteFilms = (req, res) => {
    execSQLQuery('DELETE FROM FILMS WHERE ID_FILM=' + parseInt(req.params.id) + ';', res)
}

const methods = {
    selectFilms,
    filterFilmsUsers,
    insertFilmsUsers,
    updateFilmsUsers,
    deleteFilms
}

module.exports = methods