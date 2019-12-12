const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()

 mongoose.connect("mongodb+srv://ana:ana@cluster0-e7zkg.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
//mongoose.connect("", {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});


let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("conexão feita com sucesso.")
})

const artistas = require("./routes/artistasRoute")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })


app.use(bodyParser.json())

app.use("/", artistas)

module.exports = app
