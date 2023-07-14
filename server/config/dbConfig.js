const mongoose = require('mongoose')
mongoose.connect(process.env.mongo_url)

const connection = mongoose.connection

connection.on('connected', () => {
  console.log('Mongo db connected successfully')
})

connection.on('error', () => {
  console.log('Mongo db connection error')
})

module.exports = mongoose
