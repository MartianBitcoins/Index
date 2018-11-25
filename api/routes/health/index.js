const mongoose = require('mongoose')
const expressAsyncHandler = require('express-async-handler')
const logger = require('../../lib/logger')
const render = require('../../lib/render')

async function healthPage (req, res) {
  logger.info('[healthPage]')

  const dbTime = (await mongoose.connection.db.command({ serverStatus: 1 })).localTime
  const serverTime = Date.now()

  const state = {
    currentPage: 'Health',
    HealthPage: {
      dbTime,
      serverTime,
    }
  }

  const renderRes = await render({ state })
  res.send(renderRes.html)
}

module.exports = expressAsyncHandler(healthPage)