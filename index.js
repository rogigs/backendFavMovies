const express = require('express')
const port = 4000
const routes = require('./src/routes/routes')

const app = express()

app.use(express.json())
app.use(routes)

// Inicia o servidor
app.listen(port)
