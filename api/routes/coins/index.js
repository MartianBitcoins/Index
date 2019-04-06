const mongoose = require('mongoose')
// var Schema = mongoose.Schema
const expressAsyncHandler = require('express-async-handler')
const logger = require('../../lib/logger')
const render = require('../../lib/render')
// const intMongoose = require('../../lib/mongoose')
var {Coins, createCoinSchema}    = require('../../schemas/coins/index')
// var db = mongoose.connection.db

async function getCoinsPage(req, res) {
  logger.info('getCoinsPage')
  let errorMesaje = ''
  let state = await Coins.find({}).limit(10)
    .exec()
    .then((coins) => {
      return  {
        currentPage: 'Coins',
        CoinsPage  : {
          error: errorMesaje,
          coins
        }
      }
    })
    .catch((err) => {
      return  { currentPage: 'Coins', error: 'error occured' }
    })

  const renderRes = await render({state})
  res.send(renderRes.html)

}


module.exports = expressAsyncHandler(getCoinsPage)
