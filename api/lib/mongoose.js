/** Connection of mongoose, only require this lib to connect,
 * after that use require('mongoose') */

const mongoose = require('mongoose')
const { mongoUrl } = require('../config/db')

const options = {
  // bufferCommands: false
}

// TODO: Test connection error
console.log('connecting to mongo...')
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('connected to db!'))

mongoose.connect(mongoUrl, options)