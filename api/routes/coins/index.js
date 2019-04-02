const mongoose = require('mongoose')
const expressAsyncHandler = require('express-async-handler')
const logger = require('../../lib/logger')
const render = require('../../lib/render')
const Coins = require('../../schemas/coins')

async function coinsPage(req, res) {
  logger.info('[Coins]')

  const dbTime = (await mongoose.connection.db.command({ serverStatus: 1 })).localTime
  const serverTime = Date.now()


  var coinData = mongoose.model('coinData', Coins)

  const coinObj = new coinData({
    name        : 'Gourmet Red',
    descriptions: 'Descripcion del CPIN',
    rating      : 10,
    image       : 'no tengo imagen',
    price_time  : '2019-3-22',
    ico_time    : '2019-10-22',
    details     : {
      token             : 'GRT',
      pre_ico_price     : 10000,
      price             : 100000000000,
      bonus             : 'Available',
      Bounty            : 'Available',
      MVP               : 'Available',
      Platfrom          : 'GourmetRed',
      Accepting         : [ 'BTC', 'ETC', 'BCH', 'QASH' ],
      minimum_investment: 1000,
      Soft_cap          : 23000,
      Hard_cap          : 34568
    }
  })

  let ErrorA = ''
  let SuccessA = 0
  let coin_Obj = null

  coinObj.save(
    function (err, coin_b) {
      logger.info('[[[[[[ENTREEE]]]]]')
      if(err) { 
        ErrorA = err 
        logger.info('[[[[[[ERROROOOOOOO]]]]]')
      }
      else {
        logger.info('[[[[[[SUCESSSSCCSS]]]]]')
        SuccessA = 1
        coin_Obj  = coin_b
      }
    }
  )
  const state = {
    currentPage: 'Coins',
    HealthPage : {
      dbTime,
      serverTime,
      error   : ErrorA,
      success : SuccessA,
      coinData: coin_Obj
    }
  }

  logger.info(state, '########STATES#########')
  const renderRes = await render({ state })
  res.send(renderRes.html)
}

module.exports = expressAsyncHandler(coinsPage)
