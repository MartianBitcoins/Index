const Joi = require('joi')
const mongoUrl = require('../config/db')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// mongoose.connect(mongoUrl, {useNewUrlParser: true})
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))

const coinsIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)
const coinsTagSchema = Joi.array().items(Joi.string().max(10))

const CoinsSchema = new Schema({
  name        : String,
  descriptions: String,
  rating      : Number,
  image       : String,
  price_time  : { type: Date, 'default': Date.now },
  ico_time    : { type: Date, 'default': Date.now },
  details     : {
    token             : String,
    pre_ico_price     : Number,
    price             : Number,
    bonus             : String,
    Bounty            : String,
    MVP               : String,
    Platfrom          : String,
    Accepting         : [],
    minimum_investment: Number,
    Soft_cap          : Number,
    Hard_cap          : Number
  }
})

var Coins = mongoose.model('Coins', CoinsSchema)


module.export = {
  coinsIdSchema,
  coinsTagSchema,
  Coins
}
