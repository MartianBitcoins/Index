var mongoose = require('mongoose')
var Schema = mongoose.Schema

const schema = new Schema({
  name        : String,
  descriptions: String,
  rating      : Number,
  image       : [],
  price_time  : { type: Date, 'default': Date.now },
  ico_time    : { type: Date,  'default': Date.now },
  details     : {
    token             : String,
    pre_ico_price     : Number,
    price             : Number,
    bonus             : String,
    bounty            : String,
    mvp               : String,
    platfrom          : String,
    accepting         : String,
    minimum_investment: Number,
    soft_cap          : Number,
    hard_cap          : Number
  }
})

module.exports = schema
