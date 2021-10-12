const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const app = express()

app.use(logger('dev'))

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(require('./routes/api.js'))
app.use(require('./routes/views.js'))
//run
app.listen(3000, () => {
  console.log(`running`)
})