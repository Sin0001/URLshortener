const express = require('express')
const mongoose = require('mongoose')
const URL = require('./models/URL')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateUrl = require('./generateUrl')

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

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const inputUrl = req.body.inputUrl
  // 從inputUrl判斷資料庫有沒有該筆資料
  return URL.findOne({ inputUrl })
    .lean()
    .then((url) => {
      if (!url) {
        const newOutputUrl = generateUrl()
        URL.create({ inputUrl, outputUrl: newOutputUrl })
          .then(() => res.render('output', { inputUrl, newOutputUrl }))
      } else {
        res.render('output', { url })
      }
    })
    .catch(error => console.log(error))
})

app.get('/:shortenUrl', (req, res) => {
  const shortenUrl = req.params.shortenUrl
  return URL.findOne({ outputUrl: { $regex: shortenUrl } })
    .lean()
    .then((url) => res.redirect(url.inputUrl))
    .catch(error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`)
})