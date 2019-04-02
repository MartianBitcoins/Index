const mongoose = require('mongoose')
const expressAsyncHandler = require('express-async-handler')
const logger = require('../../lib/logger')
const render = require('../../lib/render')
const Coins = require('../../schemas/coins')

async function coinsPage(req, res) {
  logger.info('[Coins Details]')

  const dbTime = (await mongoose.connection.db.command({ serverStatus: 1 })).localTime
  const serverTime = Date.now()

  // Adventure.findOne({ type: 'iphone' }).exec(function (err, adventure) {})
  let coinslist = []
  let theError = ''

  var coi = mongoose.model('coi', Coins)

  coi.find({})
    .exec(function(err, books) {
      if(err) {
        theError = err
        // res.send('error occured')

      } else {
        logger.info(books)
        coinslist = books
      }
    })
  const state = {
    currentPage: 'CoinsDetails',
    CoinsData  : {
      dbTime,
      serverTime,
      detail      : 1,
      errorMessage: theError,
      coinsL      : coinslist
    }
  }

  const renderRes = await render({ state })
  res.send(renderRes.html)
}

module.exports = expressAsyncHandler(coinsPage)
