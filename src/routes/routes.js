const express = require('express')

const UsersController = require('../controllers/UsersController')
const FilmsController = require('../controllers/FilmsController')
const SeriesController = require('../controllers/SeriesController')

const routes = express.Router()


// Rotas  Users
routes.get('/users', UsersController.selectUsers)
routes.get('/users/:id', UsersController.filterUsers)
routes.post('/users', UsersController.insertUsers)
routes.patch('/users/:id', UsersController.updateUsers)
routes.delete('/users/:id', UsersController.deleteUsers)

routes.get('/films', FilmsController.selectFilms)
routes.get('/films/:id', FilmsController.filterFilmsUsers)
routes.post('/films/:id', FilmsController.insertFilmsUsers)
routes.patch('/films/:id', FilmsController.updateFilmsUsers)
routes.delete('/films/:id', FilmsController.deleteFilms)

routes.get('/series', SeriesController.selectSeries)
routes.get('/series/:id', SeriesController.filterSeriesUsers)
routes.post('/series/:id', SeriesController.insertSeriesUsers)
routes.patch('/series/:id', SeriesController.updateSeriesUsers)
routes.delete('/series/:id', SeriesController.deleteSeries)


module.exports = routes