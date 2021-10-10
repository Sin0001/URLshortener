const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('./config/mongoose')

const PORT = 3000

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`)
})