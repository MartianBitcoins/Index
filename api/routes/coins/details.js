const mongoose = require('mongoose')
const expressAsyncHandler = require('express-async-handler')
const logger = require('../../lib/logger')
const render = require('../../lib/render')
var {Coins, createCoinSchema}    = require('../../schemas/coins/index')

async function getByIdCoinsPage(req, res) {
  let errorMesaje = ''

  let state = await Coins.findOne({
    _id: req.params.id
  }).exec()
    .then((coin) => {
      return  {
        currentPage: 'CoinsDetails',
        CoinsPage  : {
          error     : errorMesaje,
          coinDetail: coin,
          page      : req.params.id
        }
      }
    })
    .catch((err) => {
      return  { currentPage: 'CoinsDetails', err }
    })

  const renderRes = await render({state})
  res.send(renderRes.html)
}

module.exports = expressAsyncHandler(getByIdCoinsPage)
