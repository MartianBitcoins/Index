const mongoose = require('mongoose')
const expressAsyncHandler = require('express-async-handler')
const logger = require('../../lib/logger')
const render = require('../../lib/render')
const moment = require('moment')
var {Coins, createCoinSchema}    = require('../../schemas/coins/index')

// Change the Date Like Price Time, and ICO TIME information to show the user

function calculateIcoTimes(coinObj) {
  let today = moment(new Date())
  let icoDetails = Object.assign({}, JSON.parse(JSON.stringify(coinObj)))
  icoDetails.price_time = (moment(new Date(coinObj.price_time)) < today._i) ? 'Ended' : coinObj.price_time
  let duration = moment.duration(moment(new Date(coinObj.ico_time)).diff(today))
  icoDetails.ico_time = duration.humanize({precision: 3})
  return icoDetails
}

async function getByIdCoinsPage(req, res) {
  let errorMesaje = ''

  let state = await Coins.findOne({
    _id: req.params.id
  }).exec()
    .then((coin) => {

      return  {
        currentPage : 'CoinsDetails',
        CoinsDetails: {
          error     : errorMesaje,
          coinDetail: calculateIcoTimes(coin),
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
