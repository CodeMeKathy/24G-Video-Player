// Video Schema

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
  title: { type: String, required: true },
  thumb: { type: String, required: true },
  comments: [
    { user: String, userIcon: String, body: String, dateCreated: Date }
  ],
  meta: {
    views: Number,
    likes: Number,
    dislikes: Number
  }
})

mongoose.model('Video', videoSchema)

module.exports = mongoose
