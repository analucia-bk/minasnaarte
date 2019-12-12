const http = require('http');
const debug = require('debug');
const express = require('express')

const app = require('./src/app')
const port = 3000
app.set('port', port)

const server = http.createServer(app)
const router = express.Router()

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Projeto Minas na Arte",
        version: "0.0.1"
    })
})
app.use('/', route)

server.listen(port);
console.log('API rodando na porta' +port)