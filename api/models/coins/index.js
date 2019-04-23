const mongoose = require('mongoose')
const schema = require('./schema')

const model = mongoose.model('Coins', schema)

module.exports = model
