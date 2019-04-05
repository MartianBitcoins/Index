const Joi = require('joi')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

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
    bounty            : String,
    mvp               : String,
    platfrom          : String,
    accepting         : [],
    minimum_investment: Number,
    soft_cap          : Number,
    hard_cap          : Number
  }
})

const  createCoinSchema = Joi.object().keys({

  name        : Joi.string().max(30).required(),
  descriptions: Joi.string().max(1000).required(),
  rating      : Joi.number().min(1).max(5),
  image       : Joi.string().required(),
  price_time  : Joi.date().timestamp().required(),
  ico_time    : Joi.date().timestamp().required(),
  details     : {
    token             : Joi.string().max(50).required(),
    pre_ico_price     : Joi.number().min(0).max(100000000000),
    price             : Joi.number().min(0).max(100000000000),
    bonus             : Joi.string().max(50).required(),
    bounty            : Joi.string().max(50).required(),
    mvp               : Joi.string().max(50).required(),
    platfrom          : Joi.string().max(50).required(),
    accepting         : Joi.array().items(),
    minimum_investment: Joi.number().min(0).max(100000000000),
    soft_cap          : Joi.number().min(1).max(100000000000),
    hard_cap          : Joi.number().min(1).max(100000000000)
  }
})

CoinsSchema.methods.joiValidate = function(obj) {
  var schema = createCoinSchema
  var result = Joi.validate(obj, schema)
  return result
}

const Coins = mongoose.model('Coins', CoinsSchema)

module.exports = { Coins,  createCoinSchema}
