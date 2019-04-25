const { celebrate, Joi } = require('celebrate')

module.exports = celebrate({
  body: Joi.object().keys({
    name        : Joi.string().max(30).required(),
    descriptions: Joi.string().max(1000).required(),
    rating      : Joi.number().min(1).max(5),
    image       : Joi.array().items(),
    price_time  : Joi.string().max(30).required(), // date().timestamp().required(),
    ico_time    : Joi.string().max(30).required(), // date().timestamp().required(),
    details     : {
      token             : Joi.string().max(50).required(),
      pre_ico_price     : Joi.number().min(0).max(100000000000),
      price             : Joi.number().min(0).max(100000000000),
      bonus             : Joi.string().max(50).required(),
      bounty            : Joi.string().max(50).required(),
      mvp               : Joi.string().max(50).required(),
      platfrom          : Joi.string().max(50).required(),
      accepting         : Joi.string(),
      minimum_investment: Joi.number().min(0).max(100000000000),
      soft_cap          : Joi.number().min(1).max(100000000000),
      hard_cap          : Joi.number().min(1).max(100000000000)
    }
  })
})
