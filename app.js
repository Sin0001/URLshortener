const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = 3000

mongoose.connect('mongodb://localhost/URLshortener')

const db = mongoose.connection

db.on('erorr', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req,res) => {
  res.send(`it will be a URLshortener`)
})

app.listen( PORT , () => {
  console.log(`app is running on http://localhost:${PORT}`)
})