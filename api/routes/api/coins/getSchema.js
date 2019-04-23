const { celebrate, Joi } = require('celebrate')

module.exports = celebrate({
  body: Joi.object({
    // name        : Joi.string().max(50).required(),
    // descriptions: Joi.string().max(1200).required(),
    // rating      : Joi.number().min(1).max(10),
    // image       : Joi.string().required(),
    // price_time  : Joi.date().timestamp().required(),
    // ico_time    : Joi.date().timestamp().required(),
    // details     : {
    //   token             : Joi.string().max(50).required(),
    //   pre_ico_price     : Joi.number().min(0).max(100000000000),
    //   price             : Joi.number().min(0).max(100000000000),
    //   bonus             : Joi.string().max(50).required(),
    //   Bounty            : Joi.string().max(50).required(),
    //   MVP               : Joi.string().max(50).required(),
    //   Platfrom          : Joi.string().max(50).required(),
    //   accepting         : [],
    //   minimum_investment: Joi.number().min(0).max(100000000000),
    //   Soft_cap          : Joi.number().min(1).max(100000000000),
    //   Hard_cap          : Joi.number().min(1).max(100000000000)
    // }
  })
})

// const  createCoinSchema = Joi.object().keys({

//   name        : Joi.string().max(30).required(),
//   descriptions: Joi.string().max(1000).required(),
//   rating      : Joi.number().min(1).max(5).required(),
//   image       : Joi.array().items().required(), // Joi.string().required(),
//   price_time  : Joi.date().timestamp(),
//   ico_time    : Joi.date().timestamp(),
//   details     : {
//     token             : Joi.string().max(50),
//     pre_ico_price     : Joi.number().min(0).max(100000000000),
//     price             : Joi.number().min(0).max(100000000000),
//     bonus             : Joi.string().max(50),
//     bounty            : Joi.string().max(50),
//     mvp               : Joi.string().max(50),
//     platfrom          : Joi.string().max(50),
//     accepting         : Joi.string().max(5000000),
//     minimum_investment: Joi.number().min(0).max(100000000000),
//     soft_cap          : Joi.number().min(1).max(100000000000),
//     hard_cap          : Joi.number().min(1).max(100000000000)
//   }
// })