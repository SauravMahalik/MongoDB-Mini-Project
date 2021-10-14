const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Tasks'
const bodyParser = require('body-parser')
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected !!')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})