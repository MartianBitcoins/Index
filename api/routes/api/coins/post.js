const expressAsyncHandler = require('express-async-handler')
const logger = require('../../../lib/logger')
const Coins = require('../../../models/coins')

async function postCoinsPage(req, res) {
  logger.info('postCoinsPage')

  var price_time = new Date(req.body.price_time)
  var ico_time   = new Date(req.body.ico_time)

  req.body.price_time = price_time
  req.body.ico_time   = ico_time

  logger.info(req.body.price_time)
  var newCoin = new Coins(req.body)

  newCoin.save(function(err, coin) {
    if(err) {
      logger.info(err)
      res.send('error saving coin')
    } else {
      res.status(200).json({message: 'Coin created successfully!!!'})
    }
  })
}

module.exports = expressAsyncHandler(postCoinsPage)
