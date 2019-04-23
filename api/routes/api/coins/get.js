const expressAsyncHandler = require('express-async-handler')
const logger = require('../../../lib/logger')
const render = require('../../../lib/render')
const Coins = require('../../../models/coins')

async function getCoinsPage(req, res) {
  logger.info('getCoinsPage')
  const coins = await Coins.find({}).limit(10)
  logger.debug('coins===>', JSON.stringify({ coins }))

  // coins.map((key)=>{
  //   objs = JSON.parse(JSON.stringify(key))
  //   objs.id = key._id
  //   objsFinal.push(objs)
  // })

  res.send(coins)
}

module.exports = expressAsyncHandler(getCoinsPage)
