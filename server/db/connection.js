const mongoose = require('./models/video')

try {
  if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      // Source: https://github.com/Automattic/mongoose/issues/8156
      useUnifiedTopology: true
    })
  } else {
    mongoose.connect('mongodb://localhost/24g-video-player', {
      useNewUrlParser: true,
      useFindAndModify: false
    })
  }
} catch (error) {
  handleError(error)
}
// Error handle method
function handleError(error) {
  console.error('Error occurred while attempting to connect', error)
}

module.exports = mongoose
