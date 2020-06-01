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

// Middleware
// Ensure the slug is created from the name
videoSchema.pre('save', function (next) {
  this.slug = slugify(this.title)
  next()
})

// Slugify Name
// Source: http://www.bryanmierke.com/2018-02-09-url-slugs-with-nodejs-mongodb
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

mongoose.model('Video', videoSchema)

module.exports = mongoose
