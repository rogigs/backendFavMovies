const execSQLQuery = require('../database/connection')

const selectSeries = (req, res) => {
    execSQLQuery('SELECT * FROM SERIES', res)
}

const filterSeriesUsers = (req, res) => {
    let filter = ''
    if (req.params.id) {
        filter = 'WHERE ID_USERS=' + parseInt(req.params.id)
    }
    console.log(filter);
    
    execSQLQuery('SELECT * FROM SERIES ' + filter, res)
}

const insertSeriesUsers = (req, res) => {
    const id_users = req.body.ID_USERS
    const title = req.body.TITLE
    const year = req.body.YEAR_SERIE
    const actors = req.body.ACTORS
    const plot = req.body.PLOT
    const avaliation = req.body.AVALIATION
    const comments = req.body.COMMENTS

    execSQLQuery(`insert into SERIES(ID_USERS, TITLE, YEAR_SERIE, ACTORS, PLOT, AVALIATION, COMMENTS)` +
        `VALUES(${id_users}, '${title}', '${year}', '${actors}', '${plot}', ${avaliation}, '${comments}');`, res)
}

const updateSeriesUsers = (req, res) => {
    const id_serie = parseInt(req.params.id)
    const avaliation = req.body.AVALIATION
    const comments = req.body.COMMENTS
    
    execSQLQuery(`UPDATE SERIES SET AVALIATION='${avaliation}', COMMENTS='${comments}' ` +
        `WHERE ID_SERIE=${id_serie}`, res)
}

const deleteSeries = (req, res) => {
    execSQLQuery('DELETE FROM SERIES WHERE ID_SERIE=' + parseInt(req.params.id) + ';', res)
}

const methods = {
    selectSeries,
    filterSeriesUsers,
    insertSeriesUsers,
    updateSeriesUsers,
    deleteSeries
}

module.exports = methods