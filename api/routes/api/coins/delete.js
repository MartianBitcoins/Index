const expressAsyncHandler = require('express-async-handler')
const logger = require('../../../lib/logger')
const Coins = require('../../../models/coins')
const ObjectId = require('mongoose').Types.ObjectId

async function deleteCoinsPage(req, res) {
  logger.info('deleteCoinsPage')
  try {
    if(!ObjectId.isValid(req.params.id))
      res.json({message: 'Object ID is not valid'})
    Coins.findOne({
      _id: req.params.id
    }).exec(function(err, coin) {
      if(err || coin == null) res.status(404).json({message: 'Coin not found!!'})
      else Coins.deleteOne({ _id: (req.params.id) }).then(() => res.json({message: `Coin number ${req.params.id} was deleted`}))

    })
  } catch (e) {
    res.json({message: e})
  }
}

module.exports = expressAsyncHandler(deleteCoinsPage)
