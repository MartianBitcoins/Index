const expressAsyncHandler = require('express-async-handler')
const logger = require('../../../lib/logger')
const render = require('../../../lib/render')
const Coins = require('../../../models/coins')

async function getCoinsPage(req, res) {
  logger.info('getCoinsPage')
  const coins = await Coins.find({}).limit(10)
  logger.debug('coins===>', JSON.stringify({ coins }))
  const state = {
    currentPage: 'Coins',
    CoinsPage: {
      coins,
    },
  }

  const renderRes = await render({ state })
  res.send(renderRes.html)
}

module.exports = expressAsyncHandler(getCoinsPage)
