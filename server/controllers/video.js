const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')
const Video = mongoose.model('Video')

router.get('/', (req, res) => {
  // Source:
  // https://evanhahn.com/gotchas-with-express-query-parsing-and-how-to-avoid-them/

  if (req.query.hasOwnProperty('title')) {
    const title = req.query.title
    Video.findOne({ title })
      .then(video => {
        res.json({ video })
      })
      .catch(err =>
        console.log(`Error occurred while attempting to fetch ${title}`, err)
      )
  } else {
    Video.find({})
      .then(videos => {
        res.json({ videos })
      })
      .catch(err =>
        console.log('Error occurred while attempting to fetch all videos', err)
      )
  }
})

router.post('/', (req, res) => {
  Video.create(req.body.video)
    .then(video => {
      res.json({ video })
    })
    .catch(err =>
      console.log(
        `Error occurred while attempting to create ${video.title || ''}`,
        err
      )
    )
})

router.put('/:id', (req, res) => {
  Video.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(video => {
      res.json({ video })
    })
    .catch(err =>
      console.log(`Error occurred while attempting to update ${title}`, err)
    )
})

router.delete('/:id', (req, res) => {
  Video.findOneAndRemove({ _id: req.params.id })
    .then(video => {
      res.json({ video })
    })
    .catch(err =>
      console.log(`Error occurred while attempting to delete ${title}`, err)
    )
})

module.exports = router
