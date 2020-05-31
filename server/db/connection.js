const mongoose = require('./models/video')

try {
  mongoose.connect('mongodb://localhost/24g-video-player', {
    useNewUrlParser: true,
    useFindAndModify: false
  })
} catch (error) {
  handleError(error)
}
// Error handle method
function handleError(error) {
  console.error('Error occurred while attempting to connect', error)
}

module.exports = mongoose
