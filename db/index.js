const mongoose = require('mongoose')

module.exports = async function syncDB() { await process.env.MONGODB_URI ||mongoose.connect('mongodb://localhost:27017/workout') }
