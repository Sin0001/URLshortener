const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
  res.send(`it will be a URLshortener`)
})

app.listen( PORT , () => {
  console.log(`app is running on http://localhost:${PORT}`)
})