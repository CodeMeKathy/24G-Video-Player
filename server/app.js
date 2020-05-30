const express = require('express')
const app = express()
const cors = require('cors')

app.set('port', process.env.PORT || 5000)
app.use(cors())

app.listen(app.get('port'), () => {
  console.log('It is Allllivveee! on PORT', app.get('port'))
})
