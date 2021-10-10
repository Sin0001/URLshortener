const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/URLshortener')

const db = mongoose.connection

db.on('erorr', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db