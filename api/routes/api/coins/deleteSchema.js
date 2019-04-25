const { celebrate, Joi } = require('celebrate')

module.exports = celebrate({
  body: Joi.object().keys({
    id: Joi.string()
  })
})
