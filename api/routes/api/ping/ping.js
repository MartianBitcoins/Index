const mongoose = require('mongoose')
const expressAsyncHandler = require('express-async-handler')
const logger = require('../../../lib/logger')

async function pingGET (req, res) {
  logger.info('/ping route called')

  const dbTime = (await mongoose.connection.db.command({ serverStatus: 1 })).localTime

  const serverTime = Date.now()

  res.send(`dbTime=${dbTime}, serverTime=${serverTime}`)
}

module.exports = expressAsyncHandler(pingGET)