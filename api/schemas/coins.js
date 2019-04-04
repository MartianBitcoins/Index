const Joi = require('joi')
const mongoUrl = require('../config/db')
const mongoose = require('mongoose')

// mongoose.connect(mongoUrl, {useNewUrlParser: true})
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))

const coinsIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)
const coinsTagSchema = Joi.array().items(Joi.string().max(10))

const CoinsSchema = new mongoose.Schema({
  name        : Joi.string().max(50).required(),
  descriptions: Joi.string().max(1200).required(),
  rating      : Joi.number().min(1).max(10),
  image       : Joi.string().required(),
  price_time  : Joi.date().timestamp().required(),
  ico_time    : Joi.date().timestamp().required(),
  details     : {
    token             : Joi.string().max(50).required(),
    pre_ico_price     : Joi.number().min(0).max(100000000000),
    price             : Joi.number().min(0).max(100000000000),
    bonus             : Joi.string().max(50).required(),
    Bounty            : Joi.string().max(50).required(),
    MVP               : Joi.string().max(50).required(),
    Platfrom          : Joi.string().max(50).required(),
    accepting         : [],
    minimum_investment: Joi.number().min(0).max(100000000000),
    Soft_cap          : Joi.number().min(1).max(100000000000),
    Hard_cap          : Joi.number().min(1).max(100000000000)
  }
})
Schema.methods.joiValidate = function(obj) {

  var schema = {
    name        : Joi.string().max(50).required(),
    descriptions: Joi.string().max(1200).required(),
    rating      : Joi.number().min(1).max(10),
    image       : Joi.string().required(),
    price_time  : Joi.date().timestamp().required(),
    ico_time    : Joi.date().timestamp().required(),
    details     : {
      token             : Joi.string().max(50).required(),
      pre_ico_price     : Joi.number().min(0).max(100000000000),
      price             : Joi.number().min(0).max(100000000000),
      bonus             : Joi.string().max(50).required(),
      Bounty            : Joi.string().max(50).required(),
      MVP               : Joi.string().max(50).required(),
      Platfrom          : Joi.string().max(50).required(),
      accepting         : [],
      minimum_investment: Joi.number().min(0).max(100000000000),
      Soft_cap          : Joi.number().min(1).max(100000000000),
      Hard_cap          : Joi.number().min(1).max(100000000000)
    }
  }
}

module.export = {
  coinsIdSchema,
  coinsTagSchema,
  CoinsSchema
}
