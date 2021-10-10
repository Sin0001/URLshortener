const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URLSchema = new Schema({
  inputUrl: {
    type: String,
    unique: true,
    required: true
  },
  outputUrl: {
    type: String,
    unique: true,
    required: true
  }
})

module.exports = mongoose.model('URL', URLSchema)