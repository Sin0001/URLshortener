const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URLSchema = new Schema({
  originURL: {
    type: String,
    required: true
  },
  shortenURL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', URLSchema)