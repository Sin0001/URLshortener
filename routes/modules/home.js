const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const generateUrl = require('../../generateUrl')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const inputUrl = req.body.inputUrl
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

router.get('/:shortenUrl', (req, res) => {
  const shortenUrl = req.params.shortenUrl
  return URL.findOne({ outputUrl: { $regex: shortenUrl } })
    .lean()
    .then((url) => res.redirect(url.inputUrl))
    .catch(error => console.log(error))
})

module.exports = router