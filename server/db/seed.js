//! Seed  Database

const mongoose = require('./connection')
const seeds = require('./seedData.json')

const Video = mongoose.model('Video')

mongoose.Promise = Promise

Video.remove({}).then(_ => {
  console.log('Dropped the DB')
  Video.collection
    .insertMany(seeds)
    .then(seededEntries => {
      console.log(seededEntries)
      mongoose.connection.close()
    })
    .catch(error => console.error('Error seeding DB', error))
})
