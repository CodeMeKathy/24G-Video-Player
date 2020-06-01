const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const VideosController = require('./controllers/video')

app.set('port', process.env.PORT || 5000)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Source:
// https://evanhahn.com/gotchas-with-express-query-parsing-and-how-to-avoid-them/
app.set('query parser', queryString => {
  return new URLSearchParams(queryString)
})

app.use(helmet())
app.use(VideosController)

app.listen(app.get('port'), () => {
  console.log('It is Allllivveee! on PORT', app.get('port'))
})
